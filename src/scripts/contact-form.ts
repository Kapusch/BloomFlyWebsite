type ContactLocale = "fr" | "en";

type RecaptchaEnterpriseApi = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: {action: string}) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: {enterprise?: RecaptchaEnterpriseApi};
  }
}

const RECAPTCHA_ACTION = "contact_form_submit";
const RECAPTCHA_LOAD_TIMEOUT_MS = 8000;
let recaptchaLoadPromise: Promise<RecaptchaEnterpriseApi> | undefined;

const localizedContent = {
  fr: {
    sending: "Envoi en cours...",
    sendingButton: "Envoi...",
    submitButton: "Envoyer",
    success: "Merci, ton message a bien été envoyé. Nous te répondrons dès que possible.",
    networkFallback: "Le formulaire est temporairement indisponible. Ton client mail va s’ouvrir pour conserver ton message.",
    validation: "Merci de vérifier les champs du formulaire.",
    rateLimited: "Trop de messages ont été envoyés récemment. Réessaie dans quelques minutes.",
    accountDeletion: "Je souhaite supprimer définitivement mon compte Bloom & Fly associé à l’adresse email indiquée ci-dessus.",
    mailName: "Nom",
    mailEmail: "Email",
    mailSubject: "Objet",
    mailSeparator: " : ",
  },
  en: {
    sending: "Sending...",
    sendingButton: "Sending...",
    submitButton: "Send",
    success: "Thank you, your message has been sent. We will reply as soon as possible.",
    networkFallback: "The form is temporarily unavailable. Your email app will open so you can keep your message.",
    validation: "Please check the form fields.",
    rateLimited: "Too many messages were sent recently. Please try again in a few minutes.",
    accountDeletion: "I would like to permanently delete the Bloom & Fly account associated with the email address entered above.",
    mailName: "Name",
    mailEmail: "Email",
    mailSubject: "Subject",
    mailSeparator: ": ",
  },
} as const;

function loadRecaptcha(siteKey: string, locale: ContactLocale): Promise<RecaptchaEnterpriseApi> {
  if (window.grecaptcha?.enterprise) {
    return Promise.resolve(window.grecaptcha.enterprise);
  }
  if (recaptchaLoadPromise) return recaptchaLoadPromise;

  recaptchaLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const rejectAndReset = (error: Error) => {
      window.clearTimeout(timeout);
      script.remove();
      recaptchaLoadPromise = undefined;
      reject(error);
    };
    const timeout = window.setTimeout(
      () => rejectAndReset(new Error("reCAPTCHA load timed out")),
      RECAPTCHA_LOAD_TIMEOUT_MS,
    );
    script.async = true;
    script.defer = true;
    script.src = "https://www.google.com/recaptcha/enterprise.js" +
      `?render=${encodeURIComponent(siteKey)}&hl=${locale}`;
    script.onload = () => {
      window.clearTimeout(timeout);
      const enterprise = window.grecaptcha?.enterprise;
      if (enterprise) resolve(enterprise);
      else rejectAndReset(new Error("reCAPTCHA API is unavailable"));
    };
    script.onerror = () => rejectAndReset(new Error("reCAPTCHA script failed to load"));
    document.head.append(script);
  });

  return recaptchaLoadPromise;
}

async function executeRecaptcha(
  siteKey: string,
  locale: ContactLocale,
): Promise<string> {
  const enterprise = await loadRecaptcha(siteKey, locale);
  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(
      () => reject(new Error("reCAPTCHA readiness timed out")),
      RECAPTCHA_LOAD_TIMEOUT_MS,
    );
    enterprise.ready(() => {
      window.clearTimeout(timeout);
      resolve();
    });
  });

  const token = await enterprise.execute(siteKey, {action: RECAPTCHA_ACTION});
  if (!token) throw new Error("reCAPTCHA returned an empty token");
  return token;
}

function readFormValues(form: HTMLFormElement) {
  const value = (selector: string) => {
    const field = form.querySelector(selector);
    return field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement ? field.value.trim() : "";
  };

  return {
    name: value("#name"),
    email: value("#email"),
    subject: value("#subject"),
    message: value("#message"),
    honeypot: value("#company"),
  };
}

export function initializeContactForm(): void {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;

  const locale: ContactLocale = form.dataset.contactLocale === "fr" ? "fr" : "en";
  const content = localizedContent[locale];
  const endpoint = form.dataset.contactEndpoint?.trim() ?? "";
  const siteKey = form.dataset.recaptchaSiteKey?.trim() ?? "";
  const submitButton = form.querySelector("[data-contact-submit]");
  const status = form.querySelector("[data-contact-status]");

  if (endpoint && siteKey) void loadRecaptcha(siteKey, locale).catch(() => undefined);

  if (new URLSearchParams(window.location.search).get("subject") === "account-deletion") {
    const subject = form.querySelector("#subject");
    const message = form.querySelector("#message");
    if (subject instanceof HTMLSelectElement) subject.value = "Account deletion";
    if (message instanceof HTMLTextAreaElement && !message.value) {
      message.value = content.accountDeletion;
    }
  }

  const setStatus = (message: string, kind: string) => {
    if (!(status instanceof HTMLElement)) return;
    status.textContent = message;
    status.dataset.kind = kind;
    status.hidden = false;
  };

  const setSending = (isSending: boolean) => {
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = isSending;
      submitButton.textContent = isSending ? content.sendingButton : content.submitButton;
    }
    form.setAttribute("aria-busy", String(isSending));
  };

  const openMailFallback = () => {
    const contactEmail = form.dataset.contactEmail;
    if (!contactEmail) return;

    const values = readFormValues(form);
    const mailSubject = `[Bloom & Fly] ${values.subject || "Contact"}`;
    const mailBody = [
      `${content.mailName}${content.mailSeparator}${values.name}`,
      `${content.mailEmail}${content.mailSeparator}${values.email}`,
      `${content.mailSubject}${content.mailSeparator}${values.subject}`,
      "",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    if (!endpoint || !siteKey) {
      setStatus(content.networkFallback, "warning");
      openMailFallback();
      return;
    }

    const values = readFormValues(form);
    setSending(true);
    setStatus(content.sending, "info");

    try {
      const recaptchaToken = await executeRecaptcha(siteKey, locale);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...values,
          recaptchaToken,
          locale,
          source: "BloomFlyWebsite",
        }),
      });

      if (response.ok) {
        form.reset();
        setStatus(content.success, "success");
        return;
      }
      if (response.status === 400) {
        setStatus(content.validation, "error");
        return;
      }
      if (response.status === 429) {
        setStatus(content.rateLimited, "error");
        return;
      }

      setStatus(content.networkFallback, "warning");
      openMailFallback();
    } catch {
      setStatus(content.networkFallback, "warning");
      openMailFallback();
    } finally {
      setSending(false);
    }
  });
}
