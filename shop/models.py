from django.db import models


class Product(models.Model):
    slug = models.SlugField(max_length=80, unique=True)
    name_ru = models.CharField("Атауы (RU)", max_length=200)
    name_kk = models.CharField("Атауы (KZ)", max_length=200, blank=True)
    name_en = models.CharField("Атауы (EN)", max_length=200, blank=True)
    description_ru = models.TextField("Сипаттама (RU)")
    description_kk = models.TextField("Сипаттама (KZ)", blank=True)
    description_en = models.TextField("Сипаттама (EN)", blank=True)
    image = models.ImageField("Сурет", upload_to="products/", blank=True, null=True)
    image_url = models.URLField("Сурет сілтемесі", blank=True)
    price = models.PositiveIntegerField("Қазіргі баға (₸)")
    old_price = models.PositiveIntegerField("Бұрынғы баға (₸)", blank=True, null=True)
    discount_percent = models.PositiveSmallIntegerField(
        "Қазіргі жеңілдік (%)", default=0, blank=True
    )
    is_promotion = models.BooleanField("Акция", default=False)
    is_active = models.BooleanField("Көрсету", default=True)
    sort_order = models.PositiveSmallIntegerField("Реті", default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["sort_order", "-created_at"]
        verbose_name = "Товар"
        verbose_name_plural = "Товарлар"

    def __str__(self):
        return self.name_ru

    @property
    def display_image(self):
        if self.image:
            return self.image.url
        return self.image_url or ""

    def effective_discount(self):
        if self.discount_percent:
            return self.discount_percent
        if self.old_price and self.old_price > self.price:
            return round((1 - self.price / self.old_price) * 100)
        return 0

    def format_price(self, lang="ru"):
        value = f"{self.price:,}".replace(",", " ")
        if lang == "kk":
            return f"{value} ₸ бастап"
        if lang == "en":
            return f"from {value} ₸"
        return f"от {value} ₸"

    def format_old_price(self, lang="ru"):
        if not self.old_price:
            return ""
        value = f"{self.old_price:,}".replace(",", " ")
        return f"{value} ₸"
