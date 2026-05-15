from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from shop.models import Product

DEFAULT_PRODUCTS = [
    {
        "slug": "aurora",
        "name_ru": "Aurora Soft",
        "name_kk": "Aurora Soft",
        "name_en": "Aurora Soft",
        "description_ru": "Мягкий premium-матрас с деликатной поддержкой, идеален для тех, кто любит ощущение сна как в boutique-отеле.",
        "description_kk": "Жұмсақ premium-матрас: нәзік қолдау, boutique-қонақүй сезімін ұнататындарға.",
        "description_en": "A soft premium mattress with gentle support, perfect for a boutique-hotel sleep feel.",
        "image_url": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "price": 189000,
        "old_price": 219000,
        "discount_percent": 14,
        "is_promotion": True,
        "sort_order": 1,
    },
    {
        "slug": "monolith",
        "name_ru": "Monolith Firm",
        "name_kk": "Monolith Firm",
        "name_en": "Monolith Firm",
        "description_ru": "Упругая модель с усиленным блоком поддержки для ровного положения спины и глубокого расслабления.",
        "description_kk": "Қатты қолдау блогы бар серпімді модель.",
        "description_en": "A firm model with enhanced support for aligned posture and deep relaxation.",
        "image_url": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "price": 229000,
        "sort_order": 2,
    },
    {
        "slug": "cloudline",
        "name_ru": "Cloudline Luxe",
        "name_kk": "Cloudline Luxe",
        "name_en": "Cloudline Luxe",
        "description_ru": "Сбалансированная luxury-модель с мягким верхним слоем и выразительным ощущением невесомости.",
        "description_kk": "Жұмсақ үстіңгі қабаты бар luxury модель.",
        "description_en": "A balanced luxury model with a soft top layer and a weightless feel.",
        "image_url": "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "price": 269000,
        "old_price": 299000,
        "discount_percent": 10,
        "is_promotion": True,
        "sort_order": 3,
    },
    {
        "slug": "residence",
        "name_ru": "Residence Grand",
        "name_kk": "Residence Grand",
        "name_en": "Residence Grand",
        "description_ru": "Флагманская коллекция для просторных спален, отелей и интерьеров с высоким запросом к комфорту.",
        "description_kk": "Кең жатын бөлмелер мен қонақүйлерге арналған флагман.",
        "description_en": "The flagship collection for spacious bedrooms, hotels, and premium interiors.",
        "image_url": "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "price": 349000,
        "sort_order": 4,
    },
]


class Command(BaseCommand):
    help = "Seed demo products and create admin user"

    def add_arguments(self, parser):
        parser.add_argument("--username", default="admin")
        parser.add_argument("--password", default="admin123")
        parser.add_argument("--email", default="admin@matrass.local")

    def handle(self, *args, **options):
        for data in DEFAULT_PRODUCTS:
            Product.objects.update_or_create(slug=data["slug"], defaults=data)

        User = get_user_model()
        user, created = User.objects.get_or_create(
            username=options["username"],
            defaults={"email": options["email"], "is_staff": True, "is_superuser": True},
        )
        if created:
            user.set_password(options["password"])
            user.save()
            self.stdout.write(self.style.SUCCESS(f"Admin created: {options['username']}"))
        else:
            self.stdout.write(f"Admin already exists: {options['username']}")

        self.stdout.write(self.style.SUCCESS("Products seeded."))
