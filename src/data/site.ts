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
    instagram: "https://www.instagram.com/bloomandfly_app/",
    facebook: "https://www.facebook.com/bloomandflyapp",
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
    title: "Bloom & Fly",
    eyebrow: "Application de bien-être",
    subtitle: "Respire, ralentis, retrouve ton équilibre.",
    body: "Une application freemium pour prendre soin de ton esprit, de tes émotions et de ton énergie avec des respirations guidées, des mantras, des mudras, des rituels express et des voyages intérieurs.",
    outcomesTitle: "Un point d’appui pour chaque moment",
    outcomes: [
      ["Stress", "Retrouve de l’espace quand la pression monte."],
      ["Énergie", "Choisis une pratique courte pour relancer ton élan."],
      ["Clarté", "Reviens à toi avec des repères simples et guidés."],
    ],
    practicesTitle: "Des pratiques guidées, pensées pour le quotidien",
    screenshotsTitle: "Une expérience douce, claire et mobile",
    storyTitle: "Une application née d’un besoin concret",
    story:
      "Bloom & Fly est né du parcours de Pauline et Jean-Emmanuel, avec l’envie de rendre les pratiques de bien-être plus accessibles, plus belles et plus faciles à intégrer dans les journées réelles.",
    finalTitle: "Commence avec quelques minutes, aujourd’hui.",
  },
  en: {
    title: "Bloom & Fly",
    eyebrow: "Wellbeing app",
    subtitle: "Breathe, slow down, come back to balance.",
    body: "A freemium app for caring for your mind, emotions, and energy with guided breathing, mantras, mudras, express rituals, inner journeys, and calming sounds.",
    outcomesTitle: "Support for every moment",
    outcomes: [
      ["Stress", "Find space when pressure rises."],
      ["Energy", "Choose a short practice to reconnect with momentum."],
      ["Clarity", "Come back to yourself with simple guided cues."],
    ],
    practicesTitle: "Guided practices made for everyday life",
    screenshotsTitle: "A soft, clear mobile experience",
    storyTitle: "An app born from a real need",
    story:
      "Bloom & Fly grew from Pauline and Jean-Emmanuel’s path, with a wish to make wellbeing practices more accessible, more beautiful, and easier to bring into real daily life.",
    finalTitle: "Begin with a few minutes today.",
  },
} as const;

export const practices = {
  fr: [
    ["Respirations guidées", "Des exercices simples pour ralentir, retrouver ton souffle et apaiser le système nerveux.", "/assets/icons/breaths.png"],
    ["Mantras et affirmations", "Des phrases d’ancrage pour nourrir la confiance, la joie, l’énergie et la douceur.", "/assets/icons/mantras.png"],
    ["Mudras", "Des gestes symboliques et guidés pour accompagner ton intention du moment.", "/assets/icons/mudras.png"],
    ["Rituels express", "Des formats courts pour traverser un pic de stress, préparer le sommeil ou relancer l’énergie.", "/assets/icons/rituals.png"],
    ["Voyages guidés", "Des immersions intérieures pour explorer tes ressources et te reconnecter à toi.", "/assets/icons/journeys.png"],
    ["Sons et ambiances", "Des paysages sonores pour respirer, travailler, te poser ou t’endormir.", "/assets/icons/music.png"],
  ],
  en: [
    ["Guided breathing", "Simple exercises to slow down, reconnect with your breath, and soothe your nervous system.", "/assets/icons/breaths.png"],
    ["Mantras and affirmations", "Grounding words to nurture confidence, joy, energy, and gentleness.", "/assets/icons/mantras.png"],
    ["Mudras", "Guided symbolic gestures to support the intention you need now.", "/assets/icons/mudras.png"],
    ["Express rituals", "Short formats to move through stress, prepare for sleep, or restore energy.", "/assets/icons/rituals.png"],
    ["Guided journeys", "Inner immersions to explore your resources and reconnect with yourself.", "/assets/icons/journeys.png"],
    ["Sounds and ambiences", "Soundscapes to breathe, focus, settle, or fall asleep.", "/assets/icons/music.png"],
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
