const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("[data-menu]");
const year = document.querySelector("#year");
const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      statusMessage.textContent = "Revisa los campos obligatorios antes de enviar.";
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = `Solicitud desde concriterio.cl - ${data.interest}`;
    const body = [
      "Nueva solicitud desde el sitio web de Con Criterio",
      "",
      `Nombre: ${data.name}`,
      `Institución u organización: ${data.institution || "No informado"}`,
      `Cargo o rol: ${data.role || "No informado"}`,
      `Comuna o región: ${data.region || "No informado"}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone || "No informado"}`,
      `Tipo de interés: ${data.interest}`,
      "",
      "Mensaje:",
      data.message,
    ].join("\n");

    const mailtoUrl = `mailto:contacto@concriterio.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusMessage.textContent = "Se abrirá tu aplicación de correo para enviar el mensaje. Si no se abre, escribe a contacto@concriterio.cl.";
    window.location.href = mailtoUrl;
  });
}
