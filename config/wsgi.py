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
    print("Migrations applied successfully.", flush=True)
except Exception as exc:
    print(f"MIGRATION FAILED: {exc}", file=sys.stderr, flush=True)
    raise
