LANG_MAP = {
    "ru": "ru",
    "kk": "kk",
    "en": "en",
}


def translate_text(text: str, source: str, target: str) -> str:
    text = (text or "").strip()
    if not text or source == target:
        return text

    try:
        from deep_translator import GoogleTranslator

        return GoogleTranslator(source=LANG_MAP[source], target=LANG_MAP[target]).translate(text)
    except Exception:
        return text


def translate_product_fields(name: str, description: str, source_lang: str) -> dict:
    source_lang = source_lang if source_lang in LANG_MAP else "ru"
    name = (name or "").strip()
    result = {"ru": {}, "kk": {}, "en": {}}

    for lang in ("ru", "kk", "en"):
        result[lang]["name"] = name
        result[lang]["description"] = translate_text(description, source_lang, lang)

    return result
