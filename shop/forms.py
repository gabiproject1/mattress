from django import forms

from .models import Product
from .translate_service import translate_product_fields


class ProductForm(forms.ModelForm):
    SOURCE_LANGS = [
        ("ru", "RU"),
        ("kk", "KZ"),
        ("en", "EN"),
    ]

    source_lang = forms.ChoiceField(
        choices=SOURCE_LANGS,
        initial="ru",
        widget=forms.Select(attrs={"class": "lang-source-select", "id": "sourceLang"}),
    )
    name_source = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={"id": "nameSource", "placeholder": ""}),
    )
    description_source = forms.CharField(
        widget=forms.Textarea(attrs={"rows": 4, "id": "descriptionSource"}),
    )

    class Meta:
        model = Product
        fields = [
            "slug",
            "image",
            "image_url",
            "price",
            "old_price",
            "discount_percent",
            "is_promotion",
            "is_active",
            "sort_order",
        ]
        widgets = {
            "slug": forms.TextInput(attrs={"placeholder": "aurora-soft"}),
            "image_url": forms.URLInput(attrs={"placeholder": "https://..."}),
            "price": forms.NumberInput(attrs={"min": 0}),
            "old_price": forms.NumberInput(attrs={"min": 0}),
            "discount_percent": forms.NumberInput(attrs={"min": 0, "max": 99}),
            "sort_order": forms.NumberInput(attrs={"min": 0}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance.pk:
            for lang in ("ru", "kk", "en"):
                name = getattr(self.instance, f"name_{lang}", "")
                desc = getattr(self.instance, f"description_{lang}", "")
                if name or desc:
                    self.fields["source_lang"].initial = lang
                    self.fields["name_source"].initial = name
                    self.fields["description_source"].initial = desc
                    break

    def save(self, commit=True):
        instance = super().save(commit=False)
        translations = translate_product_fields(
            self.cleaned_data["name_source"],
            self.cleaned_data["description_source"],
            self.cleaned_data["source_lang"],
        )
        for lang in ("ru", "kk", "en"):
            setattr(instance, f"name_{lang}", translations[lang]["name"])
            setattr(instance, f"description_{lang}", translations[lang]["description"])
        if commit:
            instance.save()
            self.save_m2m()
        return instance
