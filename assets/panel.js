function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : "";
}

function setupPanelMenu() {
  const burger = document.getElementById("panelBurger");
  const sidebar = document.getElementById("panelSidebar");
  const overlay = document.getElementById("panelOverlay");
  const closeBtn = document.getElementById("panelClose");

  if (!burger || !sidebar || !overlay) return;

  const openMenu = () => {
    document.body.classList.add("panel-menu-open");
  };

  const closeMenu = () => {
    document.body.classList.remove("panel-menu-open");
  };

  burger.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
}

function updatePreview(translations) {
  const map = {
    ru: ["previewNameRu", "previewDescRu"],
    kk: ["previewNameKk", "previewDescKk"],
    en: ["previewNameEn", "previewDescEn"],
  };

  Object.entries(map).forEach(([lang, [nameId, descId]]) => {
    const nameEl = document.getElementById(nameId);
    const descEl = document.getElementById(descId);
    if (!nameEl || !descEl || !translations[lang]) return;
    nameEl.textContent = translations[lang].name || "—";
    descEl.textContent = translations[lang].description || "—";
  });

  const preview = document.getElementById("translationPreview");
  if (preview) preview.classList.add("is-visible");
}

async function translateForm() {
  const nameInput = document.getElementById("nameSource");
  const descInput = document.getElementById("descriptionSource");
  const langSelect = document.getElementById("sourceLang");
  const translateBtn = document.getElementById("translateBtn");

  if (!nameInput || !langSelect) return;

  const name = nameInput.value.trim();
  const description = descInput ? descInput.value.trim() : "";
  const sourceLang = langSelect.value;

  if (!name) {
    nameInput.focus();
    return;
  }

  if (translateBtn) {
    translateBtn.disabled = true;
    translateBtn.textContent = "...";
  }

  try {
    const response = await fetch("/panel/api/translate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({ name, description, source_lang: sourceLang }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Translate failed");

    updatePreview(data.translations);
  } catch (error) {
    console.error(error);
  } finally {
    if (translateBtn) {
      translateBtn.disabled = false;
      translateBtn.textContent = translateBtn.dataset.label || translateBtn.textContent;
    }
  }
}

function setupTranslateForm() {
  const translateBtn = document.getElementById("translateBtn");
  if (!translateBtn) return;

  translateBtn.dataset.label = translateBtn.textContent;
  translateBtn.addEventListener("click", translateForm);

  const nameInput = document.getElementById("nameSource");
  if (nameInput && nameInput.value.trim()) {
    translateForm();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupPanelMenu();
  setupTranslateForm();
});
