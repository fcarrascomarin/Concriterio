const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("[data-menu]");
const year = document.querySelector("#year");
const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const revealItems = document.querySelectorAll(".reveal");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeaderOnScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const closeMenu = () => {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menú");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

if (header) {
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) closeMenu();
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -50px" });

  revealItems.forEach((item) => revealObserver.observe(item));

  const sections = [...document.querySelectorAll("main section[id]")];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { threshold: 0.34, rootMargin: "-15% 0px -45%" });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      statusMessage.textContent = "Revisa los campos obligatorios antes de continuar.";
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const subject = `Primera conversación Con Criterio - ${data.institution || "Nueva solicitud"}`;

    const body = [
      "Solicitud de primera conversación desde concriterio.cl",
      "",
      `Nombre: ${data.name}`,
      `Correo: ${data.email}`,
      `Institución u organización: ${data.institution}`,
      `Tipo de organización: ${data.organizationType}`,
      "",
      "Situación que necesitan comprender u ordenar:",
      data.message,
      "",
      "Decisión que necesitan tomar:",
      data.decision || "No informada",
      "",
      "La persona confirmó que no incluyó información sensible, reservada ni datos personales de terceros."
    ].join("\n");

    const mailtoUrl = `mailto:contacto@concriterio.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    statusMessage.textContent = "Se abrirá tu aplicación de correo para completar el envío. Si no se abre, escribe a contacto@concriterio.cl.";
    window.location.href = mailtoUrl;
  });
}
