export const site = {
  baseUrl: "https://bloomandflyapp.com",
  appStoreUrl: "https://apps.apple.com/us/app/bloom-fly/id6759394532",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.bloomyapps.bloomandfly",
  smartDownload: {
    fr: "https://go.bloomandflyapp.com/download/?lang=fr",
    en: "https://go.bloomandflyapp.com/download/?lang=en",
  },
  contactEmail: "contact@bloomandflyapp.com",
  socials: {
    fr: {
      instagram: "https://www.instagram.com/bloomandfly_app/",
      facebook: "https://www.facebook.com/bloomandflyapp",
      tiktok: "https://www.tiktok.com/@bloomandfly_app",
    },
    en: {
      instagram: "https://www.instagram.com/bloomandfly_en/",
      facebook: "https://www.facebook.com/bloomandflyappen",
      tiktok: "https://www.tiktok.com/@bloomandfly_en",
    },
  },
} as const;

export const routes = {
  fr: {
    home: "/",
    discover: "/discover-bloom-and-fly/",
    about: "/about/",
    contact: "/contact/",
    legalNotices: "/legal-notices/",
    privacyPolicy: "/privacy-policy/",
    termsOfService: "/terms-of-service/",
    termsOfSale: "/terms-of-sale/",
  },
  en: {
    home: "/en/",
    discover: "/en/discover-bloom-and-fly/",
    about: "/en/about/",
    contact: "/en/contact/",
    legalNotices: "/en/legal-notices/",
    privacyPolicy: "/en/privacy-policy/",
    termsOfService: "/en/terms-of-service/",
    termsOfSale: "/en/terms-of-sale/",
  },
} as const;

export type Locale = "fr" | "en";

export const labels = {
  fr: {
    langName: "Français",
    switchLabel: "English",
    switchHref: "/en/",
    nav: {
      home: "Accueil",
      discover: "Découvrir",
      about: "À propos",
      contact: "Contact",
    },
    cta: {
      primary: "Essayer gratuitement",
      secondary: "Découvrir les pratiques",
      stores: "Télécharger sur les stores",
    },
    footerLegal: "Informations légales",
    follow: "Suivre Bloom & Fly",
    contact: "Nous contacter",
  },
  en: {
    langName: "English",
    switchLabel: "Français",
    switchHref: "/",
    nav: {
      home: "Home",
      discover: "Discover",
      about: "About",
      contact: "Contact",
    },
    cta: {
      primary: "Try for free",
      secondary: "Explore practices",
      stores: "Download from the stores",
    },
    footerLegal: "Legal",
    follow: "Follow Bloom & Fly",
    contact: "Contact us",
  },
} as const;

export const homeContent = {
  fr: {
    title: "ßloom & Fly",
    eyebrow: "Application de bien-être",
    subtitle: "Sens-toi mieux jour après jour",
    body: "L’application qui t’aide à prendre soin de ton esprit, de tes émotions et de ton équilibre.",
    outcomesTitle: "Choisis ce dont tu as besoin maintenant",
    outcomesIntro:
      "Un moment de calme, un regain d’énergie ou un peu plus de confiance : explore les pratiques qui répondent à ton besoin du moment.",
    outcomes: [
      ["Trouve le calme", "Apaise tes pensées qui tournent en boucle", "/assets/outcomes/need-calm.png"],
      ["Retrouve de l’énergie", "Retrouve ton élan et profite pleinement de ta journée", "/assets/outcomes/need-energy.png"],
      ["Cultive ta confiance", "Avance chaque jour avec plus d’assurance", "/assets/outcomes/need-confidence.png"],
    ],
    practicesTitle: "Des pratiques guidées, pensées pour le quotidien",
    practicesIntro:
      "Respirations, mantras, mudras, rituels express et voyages guidés : découvre les pratiques qui te font du bien, à ton rythme.",
    screenshotsTitle: "Prendre soin de toi, en toute simplicité",
    screenshotsIntro:
      "Une application claire et intuitive pour retrouver facilement ce qui te fait du bien.",
    storyTitle: "Une application née d’un besoin concret",
    story:
      "Bloom & Fly est née du parcours de Pauline et Jean-Emmanuel, avec l'envie de rendre les pratiques de bien-être plus accessibles et plus faciles à intégrer au quotidien.",
    finalTitle: "Et si tu commençais aujourd'hui ?",
  },
  en: {
    title: "ßloom & Fly",
    eyebrow: "Wellbeing app",
    subtitle: "Feel better day after day",
    body: "The app that helps you take care of your mind, your emotions, and your well-being.",
    outcomesTitle: "Choose what you need right now",
    outcomesIntro:
      "A moment of calm, a boost of energy, or a little more confidence: explore practices that match what you need right now.",
    outcomes: [
      ["Find calm", "Soothe racing thoughts and find a sense of peace", "/assets/outcomes/need-calm.png"],
      ["Restore your energy", "Feel more energized and enjoy each day more fully", "/assets/outcomes/need-energy.png"],
      ["Build your confidence", "Move forward each day with greater self-confidence", "/assets/outcomes/need-confidence.png"],
    ],
    practicesTitle: "Guided practices made for everyday life",
    practicesIntro:
      "Breathing exercises, mantras, mudras, quick rituals, and guided journeys: discover the practices that help you feel good, at your own pace.",
    screenshotsTitle: "Taking care of yourself, made simple",
    screenshotsIntro:
      "A clear and intuitive app to easily return to the practices that make you feel good.",
    storyTitle: "An app born from a real need",
    story:
      "Bloom & Fly was born from Pauline and Jean-Emmanuel's journey, with the goal of making wellness practices more accessible and easier to integrate into everyday life.",
    finalTitle: "What if you started today?",
  },
} as const;

export const practices = {
  fr: [
    ["Respirations guidées", "Des respirations guidées pour ralentir et retrouver le calme.", "/assets/icons/practice-type-breaths.png"],
    ["Mantras et affirmations", "Des mots bienveillants pour cultiver la confiance, retrouver de l’énergie et apaiser l’esprit.", "/assets/icons/practice-type-mantras.png"],
    ["Mudras", "Des gestes des mains pour te recentrer et retrouver le calme.", "/assets/icons/practice-type-mudras.png"],
    ["Rituels express", "Des formats courts pour traverser un pic de stress, préparer le sommeil ou retrouver de l’énergie.", "/assets/icons/practice-type-rituals.png"],
    ["Voyages guidés", "Un mélange de pratiques guidées pour prendre davantage de temps pour toi.", "/assets/icons/practice-type-journeys.png"],
    ["Sons et ambiances", "Des ambiances sonores pour respirer, te détendre, te concentrer ou t’endormir.", "/assets/icons/practice-type-music.png"],
  ],
  en: [
    ["Guided breathing", "Guided breathing to slow down and find calm.", "/assets/icons/practice-type-breaths.png"],
    ["Mantras and affirmations", "Kind words to build confidence, restore your energy, and calm your mind.", "/assets/icons/practice-type-mantras.png"],
    ["Mudras", "Hand gestures to help you refocus and find calm.", "/assets/icons/practice-type-mudras.png"],
    ["Express rituals", "Short guided rituals to get through stressful moments, prepare for sleep, or restore your energy.", "/assets/icons/practice-type-rituals.png"],
    ["Guided journeys", "A blend of guided practices to take more time for yourself.", "/assets/icons/practice-type-journeys.png"],
    ["Sounds and ambiences", "Soundscapes to breathe, relax, focus, or fall asleep.", "/assets/icons/practice-type-music.png"],
  ],
} as const;

export const pageMeta = {
  fr: {
    home: {
      title: "Bloom & Fly - Application de bien-être",
      description:
        "Respirations guidées, mantras, mudras, rituels express et voyages guidés pour retrouver calme et équilibre au quotidien.",
      path: routes.fr.home,
      alternate: routes.en.home,
    },
    discover: {
      title: "Découvrir les pratiques Bloom & Fly",
      description:
        "Explore les respirations, mantras, mudras, rituels, voyages guidés et sons disponibles dans l’application Bloom & Fly.",
      path: routes.fr.discover,
      alternate: routes.en.discover,
    },
    about: {
      title: "À propos de Bloom & Fly",
      description:
        "Découvre l’histoire de Bloom & Fly, l’application de bien-être créée pour rendre les pratiques guidées plus accessibles.",
      path: routes.fr.about,
      alternate: routes.en.about,
    },
    contact: {
      title: "Contact Bloom & Fly",
      description: "Contacte l’équipe Bloom & Fly pour une question, une demande presse, un partenariat ou un besoin de support.",
      path: routes.fr.contact,
      alternate: routes.en.contact,
    },
  },
  en: {
    home: {
      title: "Bloom & Fly - Wellbeing App",
      description:
        "Guided breathing, mantras, mudras, express rituals, inner journeys, and calming sounds to help you feel balanced every day.",
      path: routes.en.home,
      alternate: routes.fr.home,
    },
    discover: {
      title: "Discover Bloom & Fly Practices",
      description:
        "Explore breathing, mantras, mudras, rituals, guided journeys, and calming sounds in the Bloom & Fly app.",
      path: routes.en.discover,
      alternate: routes.fr.discover,
    },
    about: {
      title: "About Bloom & Fly",
      description: "Discover the story behind Bloom & Fly, the wellbeing app designed to make guided practices easier to use.",
      path: routes.en.about,
      alternate: routes.fr.about,
    },
    contact: {
      title: "Contact Bloom & Fly",
      description: "Contact the Bloom & Fly team for support, partnerships, press, or general questions.",
      path: routes.en.contact,
      alternate: routes.fr.contact,
    },
  },
} as const;
