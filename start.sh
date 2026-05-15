#!/usr/bin/env bash
set -o errexit

echo "Running database migrations..."
python manage.py migrate --no-input --verbosity 2

echo "Starting Gunicorn..."
exec gunicorn config.wsgi:application --bind "0.0.0.0:${PORT:-8000}" --workers 1 --timeout 120
