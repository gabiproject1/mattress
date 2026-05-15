from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("api/products/", views.products_api, name="products_api"),
    path("panel/login/", views.panel_login, name="panel_login"),
    path("panel/logout/", views.panel_logout, name="panel_logout"),
    path("panel/", views.panel_dashboard, name="panel_dashboard"),
    path("panel/products/new/", views.panel_product_create, name="panel_product_create"),
    path("panel/products/<int:pk>/edit/", views.panel_product_edit, name="panel_product_edit"),
    path("panel/products/<int:pk>/delete/", views.panel_product_delete, name="panel_product_delete"),
    path("panel/api/translate/", views.panel_translate, name="panel_translate"),
]
