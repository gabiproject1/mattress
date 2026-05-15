from functools import wraps

from django.shortcuts import redirect

from .panel_i18n import get_panel_strings

PANEL_LANGS = ("kk", "ru", "en")


def get_panel_lang(request) -> str:
    lang = request.GET.get("lang") or request.session.get("panel_lang", "kk")
    if lang in PANEL_LANGS:
        request.session["panel_lang"] = lang
    return request.session.get("panel_lang", "kk")


def panel_lang_url(request, lang: str) -> str:
    path = request.path
    query = request.GET.copy()
    query["lang"] = lang
    qs = query.urlencode()
    return f"{path}?{qs}" if qs else path


def with_panel_context(view):
    @wraps(view)
    def wrapper(request, *args, **kwargs):
        lang = get_panel_lang(request)
        kwargs.setdefault("extra_context", {})
        if isinstance(kwargs.get("extra_context"), dict):
            kwargs["extra_context"].update(
                {
                    "panel_lang": lang,
                    "t": get_panel_strings(lang),
                    "panel_langs": PANEL_LANGS,
                }
            )
        return view(request, *args, **kwargs)

    return wrapper


def render_panel(request, template, context=None):
    from django.shortcuts import render

    lang = get_panel_lang(request)
    context = context or {}
    context.update(
        {
            "panel_lang": lang,
            "t": get_panel_strings(lang),
            "panel_langs": PANEL_LANGS,
        }
    )
    return render(request, template, context)
