"""
WSGI config for config project.
"""

import os
import sys

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

from django.core.management import call_command
from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()

# Render: build және runtime бөлек — миграцияны әр іске қосуда орындау керек.
print("Applying database migrations...", flush=True)
try:
    call_command("migrate", "--no-input", verbosity=1)
    call_command("seed_products")
    print("Migrations and seed completed successfully.", flush=True)
except Exception as exc:
    print(f"STARTUP DB SETUP FAILED: {exc}", file=sys.stderr, flush=True)
    raise
