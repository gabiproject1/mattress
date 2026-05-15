#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input

# Миграция build-те SQLite үшін жұмыс істемейді (Render runtime бөлек).
# migrate — start.sh немесе preDeployCommand арқылы орындалады.
