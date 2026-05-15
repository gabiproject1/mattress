import json
import os

from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_GET, require_http_methods

from .admin_forms import PanelRegistrationForm
from .forms import ProductForm
from .models import Product
from .panel_utils import get_panel_lang, get_panel_strings, render_panel
from .translate_service import translate_product_fields


def staff_required(view):
    return user_passes_test(lambda u: u.is_authenticated and u.is_staff)(view)


def home(request):
    return render(request, "shop/home.html")


@require_GET
def products_api(request):
    lang = request.GET.get("lang", "ru")
    if lang not in ("ru", "kk", "en"):
        lang = "ru"

    items = []
    for product in Product.objects.filter(is_active=True):
        name = getattr(product, f"name_{lang}") or product.name_ru
        description = getattr(product, f"description_{lang}") or product.description_ru
        items.append(
            {
                "key": product.slug,
                "name": name,
                "description": description,
                "price": product.format_price(lang),
                "priceValue": product.price,
                "oldPrice": product.old_price,
                "oldPriceFormatted": product.format_old_price(lang),
                "discountPercent": product.effective_discount(),
                "isPromotion": product.is_promotion,
                "image": request.build_absolute_uri(product.display_image)
                if product.display_image and product.display_image.startswith("/")
                else product.display_image,
            }
        )

    return JsonResponse({"products": items})


def _msg(request, key: str):
    lang = get_panel_lang(request)
    return get_panel_strings(lang).get(key, key)


def _registration_open():
    if not get_user_model().objects.filter(is_staff=True).exists():
        return True, False
    if os.getenv("PANEL_ALLOW_REGISTRATION", "true").lower() in ("1", "true", "yes"):
        key = os.getenv("PANEL_REGISTRATION_KEY", "").strip()
        return True, bool(key)
    return False, False


@require_http_methods(["GET", "POST"])
def panel_login(request):
    if request.user.is_authenticated and request.user.is_staff:
        return redirect("panel_dashboard")

    t = get_panel_strings(get_panel_lang(request))
    error = ""
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        password = request.POST.get("password", "")
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_staff:
            login(request, user)
            next_url = request.GET.get("next") or "panel_dashboard"
            return redirect(next_url)
        error = t["login_error"]

    return render_panel(
        request,
        "shop/panel/login.html",
        {"error": error, "registration_open": _registration_open()[0]},
    )


@require_http_methods(["GET", "POST"])
def panel_register(request):
    if request.user.is_authenticated and request.user.is_staff:
        return redirect("panel_dashboard")

    registration_open, require_invite = _registration_open()
    t = get_panel_strings(get_panel_lang(request))

    if not registration_open:
        return render_panel(
            request,
            "shop/panel/register.html",
            {"form": None, "closed": True},
        )

    if request.method == "POST":
        form = PanelRegistrationForm(request.POST, require_invite=require_invite)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, t["register_success"])
            return redirect("panel_dashboard")
    else:
        form = PanelRegistrationForm(require_invite=require_invite)

    return render_panel(request, "shop/panel/register.html", {"form": form, "closed": False})


@login_required(login_url="panel_login")
@staff_required
def panel_logout(request):
    logout(request)
    return redirect("panel_login")


@login_required(login_url="panel_login")
@staff_required
def panel_dashboard(request):
    products = Product.objects.all()
    return render_panel(request, "shop/panel/dashboard.html", {"products": products})


@login_required(login_url="panel_login")
@staff_required
@require_http_methods(["GET", "POST"])
def panel_product_create(request):
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, _msg(request, "created"))
            return redirect("panel_dashboard")
    else:
        form = ProductForm()

    t = get_panel_strings(get_panel_lang(request))
    return render_panel(
        request,
        "shop/panel/product_form.html",
        {"form": form, "title": t["new_title"], "submit_label": t["add"]},
    )


@login_required(login_url="panel_login")
@staff_required
@require_http_methods(["GET", "POST"])
def panel_product_edit(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            form.save()
            messages.success(request, _msg(request, "updated"))
            return redirect("panel_dashboard")
    else:
        form = ProductForm(instance=product)

    t = get_panel_strings(get_panel_lang(request))
    return render_panel(
        request,
        "shop/panel/product_form.html",
        {
            "form": form,
            "product": product,
            "title": t["edit_title"],
            "submit_label": t["save"],
        },
    )


@login_required(login_url="panel_login")
@staff_required
@require_http_methods(["POST"])
def panel_product_delete(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.delete()
    messages.success(request, _msg(request, "deleted"))
    return redirect("panel_dashboard")


@login_required(login_url="panel_login")
@staff_required
@require_http_methods(["POST"])
def panel_translate(request):
    try:
        payload = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    name = payload.get("name", "").strip()
    description = payload.get("description", "").strip()
    source_lang = payload.get("source_lang", "ru")

    if not name:
        return JsonResponse({"error": "Name is required"}, status=400)

    translations = translate_product_fields(name, description, source_lang)
    return JsonResponse({"translations": translations})
