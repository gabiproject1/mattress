const WHATSAPP_NUMBER = "77000000000";

const productImages = {
  aurora:
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
  monolith:
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200",
  cloudline:
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
  residence:
    "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const translations = {
  ru: {
    pageTitle: "MATRASS | Премиальные матрасы",
    brandTag: "Luxury Sleep Atelier",
    headerCta: "WhatsApp",
    nav: {
      catalog: "Каталог",
      about: "О нас",
      reviews: "Отзывы",
      faq: "FAQ",
      contacts: "Контакты",
    },
    hero: {
      eyebrow: "Handcrafted comfort collection",
      title: "Комфорт премиум класса",
      subtitle:
        "Дизайнерские матрасы для глубокого сна, созданные из многослойных натуральных материалов и продуманные до каждой детали.",
      metricOneValue: "12 лет",
      metricOneLabel: "создаем ортопедический комфорт",
      metricTwoValue: "5 слоев",
      metricTwoLabel: "премиальной поддержки позвоночника",
      noteLabel: "Boutique sleep experience",
      noteValue: "Luxury crafted in every layer",
    },
    buttons: {
      order: "Заказать",
      discover: "Смотреть каталог",
    },
    catalog: {
      eyebrow: "Curated collection",
      title: "Каталог матрасов",
      subtitle:
        "Выберите модель, которая сочетает мягкость luxury-отеля и точную поддержку для ежедневного восстановления.",
      tag: "Premium",
    },
    about: {
      eyebrow: "Why MATRASS",
      title: "Матрасы, в которых luxury ощущается с первой минуты",
      text: "Мы соединяем анатомическую поддержку, премиальные ткани и спокойную эстетику отельного уровня, чтобы спальня стала вашим личным пространством восстановления.",
      advantageOneTitle: "Премиальные материалы",
      advantageOneText: "Натуральные ткани, дышащие наполнители и тактильно богатая отделка.",
      advantageTwoTitle: "Ортопедическая поддержка",
      advantageTwoText: "Точный баланс мягкости и упругости для комфортного положения тела.",
      advantageThreeTitle: "Ручная отделка",
      advantageThreeText: "Каждая модель проходит финальную ручную проверку и аккуратную сборку.",
      advantageFourTitle: "Boutique сервис",
      advantageFourText: "Персональная консультация и прямой заказ в WhatsApp без лишних шагов.",
    },
    reviews: {
      eyebrow: "Client voices",
      title: "Отзывы клиентов",
      subtitle:
        "Нас выбирают за ощущение спокойной роскоши, качественный сон и внимательный сервис.",
    },
    faq: {
      eyebrow: "Everything clear",
      title: "FAQ",
      subtitle:
        "Ответили на основные вопросы, чтобы выбор матраса был таким же спокойным, как и будущий сон.",
    },
    footer: {
      eyebrow: "Contact us",
      title: "Ваш новый уровень сна начинается здесь",
      phoneLabel: "Телефон",
      addressLabel: "Адрес",
      addressValue: "Алматы, пр. Аль-Фараби, 77/8",
      bottom: "Все права защищены.",
    },
    products: [
      {
        key: "aurora",
        name: "Aurora Soft",
        description:
          "Мягкий premium-матрас с деликатной поддержкой, идеален для тех, кто любит ощущение сна как в boutique-отеле.",
        price: "от 189 000 ₸",
      },
      {
        key: "monolith",
        name: "Monolith Firm",
        description:
          "Упругая модель с усиленным блоком поддержки для ровного положения спины и глубокого расслабления.",
        price: "от 229 000 ₸",
      },
      {
        key: "cloudline",
        name: "Cloudline Luxe",
        description:
          "Сбалансированная luxury-модель с мягким верхним слоем и выразительным ощущением невесомости.",
        price: "от 269 000 ₸",
      },
      {
        key: "residence",
        name: "Residence Grand",
        description:
          "Флагманская коллекция для просторных спален, отелей и интерьеров с высоким запросом к комфорту.",
        price: "от 349 000 ₸",
      },
    ],
    reviewItems: [
      {
        quote:
          "Очень спокойный и дорогой по ощущениям матрас. Спина перестала уставать уже через несколько дней, а внешний вид идеально вписался в интерьер спальни.",
        author: "Айгерим С.",
        role: "Алматы",
      },
      {
        quote:
          "Выбирали между несколькими брендами, но именно здесь понравились материалы и сервис. Заказ через WhatsApp оказался быстрым и очень удобным.",
        author: "Руслан Т.",
        role: "Астана",
      },
      {
        quote:
          "У матраса действительно премиальное ощущение: тишина, поддержка и ощущение luxury-отеля у себя дома. Рекомендую тем, кто ценит детали.",
        author: "Dana K.",
        role: "Shymkent",
      },
    ],
    faqItems: [
      {
        question: "Можно ли заказать матрас без корзины и регистрации?",
        answer:
          "Да. У нас нет корзины и checkout. Нажмите кнопку «Заказать», и откроется WhatsApp с готовым сообщением по выбранной модели.",
      },
      {
        question: "Как выбрать жесткость матраса?",
        answer:
          "Если вы любите мягкий hotel-feel, выбирайте Aurora Soft или Cloudline Luxe. Для более выраженной поддержки подойдут Monolith Firm и Residence Grand.",
      },
      {
        question: "Есть ли доставка по Казахстану?",
        answer:
          "Да, мы организуем доставку по Алматы и в другие города Казахстана. Детали доставки можно быстро уточнить в WhatsApp.",
      },
      {
        question: "Можно ли получить консультацию перед заказом?",
        answer:
          "Конечно. Мы помогаем подобрать модель по росту, привычкам сна, желаемой мягкости и формату спальни.",
      },
    ],
  },
  kk: {
    pageTitle: "MATRASS | Премиум матрастар",
    brandTag: "Luxury Sleep Atelier",
    headerCta: "WhatsApp",
    nav: {
      catalog: "Каталог",
      about: "Біз туралы",
      reviews: "Пікірлер",
      faq: "FAQ",
      contacts: "Байланыс",
    },
    hero: {
      eyebrow: "Handcrafted comfort collection",
      title: "Премиум деңгейдегі жайлылық",
      subtitle:
        "Терең ұйқыға арналған дизайнерлік матрастар: табиғи көпқабатты материалдардан жасалып, әр бөлшегі мұқият ойластырылған.",
      metricOneValue: "12 жыл",
      metricOneLabel: "ортопедиялық жайлылық жасаймыз",
      metricTwoValue: "5 қабат",
      metricTwoLabel: "омыртқаға премиум қолдау",
      noteLabel: "Boutique sleep experience",
      noteValue: "Luxury crafted in every layer",
    },
    buttons: {
      order: "Тапсырыс беру",
      discover: "Каталогты көру",
    },
    catalog: {
      eyebrow: "Curated collection",
      title: "Матрас каталогы",
      subtitle:
        "Luxury-қонақүйдің жұмсақтығы мен күнделікті қалпына келуге арналған дәл қолдауды біріктіретін модельді таңдаңыз.",
      tag: "Premium",
    },
    about: {
      eyebrow: "Why MATRASS",
      title: "Luxury сезімі алғашқы сәттен білінетін матрастар",
      text: "Біз анатомиялық қолдауды, премиум маталарды және тыныш hotel-style эстетиканы біріктіріп, жатын бөлмені қалпына келетін жеке кеңістікке айналдырамыз.",
      advantageOneTitle: "Премиум материалдар",
      advantageOneText: "Табиғи маталар, ауа өткізетін толтырғыштар және жағымды әрлеу.",
      advantageTwoTitle: "Ортопедиялық қолдау",
      advantageTwoText: "Дене қалпына ыңғайлы болу үшін жұмсақтық пен серпімділіктің дәл теңгерімі.",
      advantageThreeTitle: "Қолмен әрлеу",
      advantageThreeText: "Әр модель соңғы қолмен тексеруден және ұқыпты жинақтаудан өтеді.",
      advantageFourTitle: "Boutique сервис",
      advantageFourText: "Артық қадамсыз WhatsApp арқылы тікелей тапсырыс және жеке кеңес.",
    },
    reviews: {
      eyebrow: "Client voices",
      title: "Клиент пікірлері",
      subtitle:
        "Бізді тыныш luxury атмосферасы, сапалы ұйқы және ұқыпты сервис үшін таңдайды.",
    },
    faq: {
      eyebrow: "Everything clear",
      title: "FAQ",
      subtitle:
        "Матрас таңдау болашақ ұйқыңыз сияқты тыныш болуы үшін негізгі сұрақтарға жауап бердік.",
    },
    footer: {
      eyebrow: "Contact us",
      title: "Ұйқының жаңа деңгейі осы жерден басталады",
      phoneLabel: "Телефон",
      addressLabel: "Мекенжай",
      addressValue: "Алматы, Әл-Фараби даңғылы, 77/8",
      bottom: "Барлық құқықтар қорғалған.",
    },
    products: [
      {
        key: "aurora",
        name: "Aurora Soft",
        description:
          "Жұмсақ premium матрас, boutique-отельдегідей жайлы ұйқыны ұнататындарға арналған нәзік қолдау.",
        price: "189 000 ₸ бастап",
      },
      {
        key: "monolith",
        name: "Monolith Firm",
        description:
          "Арқаның түзу қалпын сақтайтын және терең босаңсуға көмектесетін күшейтілген қолдау блогы бар серпімді модель.",
        price: "229 000 ₸ бастап",
      },
      {
        key: "cloudline",
        name: "Cloudline Luxe",
        description:
          "Жоғарғы жұмсақ қабаты бар, тепе-тең luxury модель және салмақсыздық сезімін сыйлайды.",
        price: "269 000 ₸ бастап",
      },
      {
        key: "residence",
        name: "Residence Grand",
        description:
          "Кең жатын бөлмелерге, қонақүйлерге және жоғары жайлылықты бағалайтын интерьерлерге арналған флагмандық топтама.",
        price: "349 000 ₸ бастап",
      },
    ],
    reviewItems: [
      {
        quote:
          "Матрас өте тыныш әрі қымбат әсер қалдырады. Бірнеше күннің ішінде арқамның шаршауы азайды, ал дизайны жатын бөлмеге керемет үйлесті.",
        author: "Әйгерім С.",
        role: "Алматы",
      },
      {
        quote:
          "Бірнеше брендтің арасынан осы жерді материалдары мен сервисі үшін таңдадық. WhatsApp арқылы тапсырыс беру өте ыңғайлы болды.",
        author: "Руслан Т.",
        role: "Астана",
      },
      {
        quote:
          "Шынымен премиум сезім береді: тыныштық, қолдау және үйдегі luxury-қонақүй атмосферасы. Ұсақ бөлшекті бағалайтындарға ұсынамын.",
        author: "Дана К.",
        role: "Шымкент",
      },
    ],
    faqItems: [
      {
        question: "Матрасты себетсіз және тіркелусіз тапсырыс беруге бола ма?",
        answer:
          "Иә. Бізде себет те, checkout та жоқ. «Тапсырыс беру» батырмасын бассаңыз, таңдалған модель туралы дайын хабарламасы бар WhatsApp ашылады.",
      },
      {
        question: "Матрастың қаттылығын қалай таңдауға болады?",
        answer:
          "Егер жұмсақ hotel-feel ұнаса, Aurora Soft немесе Cloudline Luxe таңдаңыз. Айқынырақ қолдау үшін Monolith Firm және Residence Grand лайық.",
      },
      {
        question: "Қазақстан бойынша жеткізу бар ма?",
        answer:
          "Иә, Алматы бойынша да, Қазақстанның өзге қалаларына да жеткізу ұйымдастырамыз. Толық ақпаратты WhatsApp арқылы тез нақтылауға болады.",
      },
      {
        question: "Тапсырыс алдында кеңес алуға бола ма?",
        answer:
          "Әрине. Біз бойыңызға, ұйқы әдетіңізге, қалаған жұмсақтыққа және жатын бөлме форматына қарай модель таңдауға көмектесеміз.",
      },
    ],
  },
  en: {
    pageTitle: "MATRASS | Premium Mattresses",
    brandTag: "Luxury Sleep Atelier",
    headerCta: "WhatsApp",
    nav: {
      catalog: "Catalog",
      about: "About",
      reviews: "Reviews",
      faq: "FAQ",
      contacts: "Contacts",
    },
    hero: {
      eyebrow: "Handcrafted comfort collection",
      title: "Premium class comfort",
      subtitle:
        "Designer mattresses for restorative sleep, built from layered natural materials and refined down to every detail.",
      metricOneValue: "12 years",
      metricOneLabel: "of orthopedic comfort expertise",
      metricTwoValue: "5 layers",
      metricTwoLabel: "of premium spinal support",
      noteLabel: "Boutique sleep experience",
      noteValue: "Luxury crafted in every layer",
    },
    buttons: {
      order: "Order Now",
      discover: "View Collection",
    },
    catalog: {
      eyebrow: "Curated collection",
      title: "Mattress catalog",
      subtitle:
        "Choose a model that blends luxury-hotel softness with precise support for everyday recovery.",
      tag: "Premium",
    },
    about: {
      eyebrow: "Why MATRASS",
      title: "Mattresses where luxury is felt from the very first moment",
      text: "We combine anatomical support, premium textiles, and serene hotel-level aesthetics so your bedroom becomes a private recovery space.",
      advantageOneTitle: "Premium materials",
      advantageOneText: "Natural textiles, breathable fillings, and tactile finishing with a refined touch.",
      advantageTwoTitle: "Orthopedic support",
      advantageTwoText: "A precise balance of softness and resilience for a comfortable body position.",
      advantageThreeTitle: "Hand-finished detailing",
      advantageThreeText: "Every model goes through a careful final inspection and neat finishing by hand.",
      advantageFourTitle: "Boutique service",
      advantageFourText: "Personal consultation and direct ordering through WhatsApp without extra steps.",
    },
    reviews: {
      eyebrow: "Client voices",
      title: "Client reviews",
      subtitle:
        "Clients choose us for calm luxury, quality sleep, and attentive service.",
    },
    faq: {
      eyebrow: "Everything clear",
      title: "FAQ",
      subtitle:
        "We answered the essential questions so choosing a mattress feels as calm as the sleep ahead.",
    },
    footer: {
      eyebrow: "Contact us",
      title: "Your next level of sleep starts here",
      phoneLabel: "Phone",
      addressLabel: "Address",
      addressValue: "77/8 Al-Farabi Ave, Almaty",
      bottom: "All rights reserved.",
    },
    products: [
      {
        key: "aurora",
        name: "Aurora Soft",
        description:
          "A soft premium mattress with delicate support, ideal for those who love a boutique-hotel sleep feeling.",
        price: "from 189,000 ₸",
      },
      {
        key: "monolith",
        name: "Monolith Firm",
        description:
          "A resilient model with reinforced support for aligned posture and deep relaxation through the night.",
        price: "from 229,000 ₸",
      },
      {
        key: "cloudline",
        name: "Cloudline Luxe",
        description:
          "A balanced luxury model with a plush upper layer and a distinct sensation of floating comfort.",
        price: "from 269,000 ₸",
      },
      {
        key: "residence",
        name: "Residence Grand",
        description:
          "A flagship collection for spacious bedrooms, hotels, and interiors with elevated comfort expectations.",
        price: "from 349,000 ₸",
      },
    ],
    reviewItems: [
      {
        quote:
          "The mattress feels calm, elegant, and genuinely premium. My back stopped getting tired within days, and the visual style fits the bedroom perfectly.",
        author: "Aigerim S.",
        role: "Almaty",
      },
      {
        quote:
          "We compared several brands, but the materials and service here felt more refined. Ordering via WhatsApp was fast and beautifully simple.",
        author: "Ruslan T.",
        role: "Astana",
      },
      {
        quote:
          "It truly delivers a luxury-hotel feeling at home: silence, support, and a refined sense of comfort. Highly recommended for detail-oriented buyers.",
        author: "Dana K.",
        role: "Shymkent",
      },
    ],
    faqItems: [
      {
        question: "Can I order a mattress without a cart or account?",
        answer:
          "Yes. There is no cart and no checkout flow. Click “Order Now” and WhatsApp will open with a pre-filled message for the selected model.",
      },
      {
        question: "How do I choose the right firmness?",
        answer:
          "If you prefer a soft hotel-feel, choose Aurora Soft or Cloudline Luxe. For stronger support, Monolith Firm and Residence Grand are better matches.",
      },
      {
        question: "Do you deliver across Kazakhstan?",
        answer:
          "Yes, we arrange delivery in Almaty and to other cities across Kazakhstan. Shipping details can be confirmed quickly in WhatsApp.",
      },
      {
        question: "Can I get advice before ordering?",
        answer:
          "Absolutely. We help you select a model based on height, sleep habits, preferred softness, and bedroom format.",
      },
    ],
  },
};

const i18nElements = document.querySelectorAll("[data-i18n]");
const catalogGrid = document.getElementById("catalogGrid");
const reviewsGrid = document.getElementById("reviewsGrid");
const faqList = document.getElementById("faqList");
const langButtons = document.querySelectorAll(".lang-btn");
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const genericWhatsAppLinks = document.querySelectorAll("[data-whatsapp-generic]");
const navLinks = document.querySelectorAll('a[href^="#"]');
const currentYearElement = document.getElementById("currentYear");

let currentLang = localStorage.getItem("matrass-language") || "ru";

if (!translations[currentLang]) {
  currentLang = "ru";
}

function getNestedValue(source, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), source);
}

function buildWhatsAppUrl(productName = "") {
  const productPart = productName ? ` ${productName}` : "";
  const message = `Здравствуйте, хочу заказать матрас${productPart}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateGenericWhatsAppLinks() {
  genericWhatsAppLinks.forEach((link) => {
    link.href = buildWhatsAppUrl();
  });
}

function renderCatalog(lang) {
  const { products, catalog } = translations[lang];

  catalogGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card reveal">
          <div class="product-media">
            <img src="${productImages[product.key]}" alt="${product.name}" />
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span class="product-tag">${catalog.tag}</span>
              <span class="price">${product.price}</span>
            </div>
            <div>
              <h3>${product.name}</h3>
            </div>
            <p>${product.description}</p>
            <a
              class="btn btn-primary product-btn"
              href="${buildWhatsAppUrl(product.name)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${translations[lang].buttons.order}
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderReviews(lang) {
  reviewsGrid.innerHTML = translations[lang].reviewItems
    .map(
      (item) => `
        <article class="review-card reveal">
          <div class="review-stars" aria-hidden="true">★★★★★</div>
          <blockquote>“${item.quote}”</blockquote>
          <div class="review-author">
            <strong>${item.author}</strong>
            <span>${item.role}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFaq(lang) {
  faqList.innerHTML = translations[lang].faqItems
    .map(
      (item, index) => `
        <article class="faq-item ${index === 0 ? "is-open" : ""}">
          <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>${item.question}</span>
            <span>+</span>
          </button>
          <div class="faq-answer">
            <div>
              <p>${item.answer}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function updateStaticContent(lang) {
  i18nElements.forEach((element) => {
    const path = element.dataset.i18n;
    const value = getNestedValue(translations[lang], path);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function updateLanguageButtons(lang) {
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const trigger = item.querySelector(".faq-question");

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".faq-item").forEach((entry) => {
        entry.classList.remove("is-open");
        entry.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  reveals.forEach((item) => observer.observe(item));
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "kk" ? "kk" : lang;
  document.title = translations[lang].pageTitle;

  updateStaticContent(lang);
  updateGenericWhatsAppLinks();
  renderCatalog(lang);
  renderReviews(lang);
  renderFaq(lang);
  updateLanguageButtons(lang);
  setupFaq();
  observeReveals();

  localStorage.setItem("matrass-language", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

burgerButton.addEventListener("click", () => {
  const isOpen = burgerButton.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-open", isOpen);
  burgerButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("is-active");
    burgerButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    burgerButton.classList.remove("is-active");
    burgerButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  }
});

currentYearElement.textContent = new Date().getFullYear();
setLanguage(currentLang);
