from django.contrib import admin

from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name_ru",
        "price",
        "old_price",
        "discount_percent",
        "is_promotion",
        "is_active",
        "sort_order",
    )
    list_filter = ("is_promotion", "is_active")
    search_fields = ("name_ru", "slug")
    prepopulated_fields = {"slug": ("name_ru",)}
