const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("[data-menu]");
const year = document.querySelector("#year");
const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");
const leadForm = document.querySelector("#lead-form");
const leadStatus = document.querySelector("#lead-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================================================
   HEADER DINÁMICO
   Agrega clase .is-scrolled al header al bajar en la página.
========================================================= */
const updateHeaderOnScroll = () => {
  if (!header) return;

  const shouldShrink = window.scrollY > 24;
  header.classList.toggle("is-scrolled", shouldShrink);
};

if (header) {
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
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

/* =========================================================
   FORMULARIO B2B
   Filtra oportunidades sin exigir presupuesto ni contrato.
========================================================= */
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
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone || "No informado"}`,
      "",
      `Institución u organización: ${data.institution}`,
      `Cargo o rol: ${data.role}`,
      `Comuna o región: ${data.region}`,
      `Tipo de organización: ${data.organizationType}`,
      `Sitio web institucional: ${data.website || "No informado"}`,
      "",
      `Tipo de interés: ${data.interest}`,
      `Plazo estimado: ${data.timeline || "No informado"}`,
      "",
      "Problema, decisión o situación a ordenar:",
      data.message,
    ].join("\n");

    const mailtoUrl = `mailto:contacto@concriterio.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusMessage.textContent = "Se abrirá tu aplicación de correo para enviar el mensaje. Si no se abre, escribe a contacto@concriterio.cl.";
    window.location.href = mailtoUrl;
  });
}

/* =========================================================
   LEAD MAGNET / DESCARGA MANIFIESTO
   Usa Formspree si se reemplaza el ID del formulario.
========================================================= */
if (leadForm && leadStatus) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      leadStatus.textContent = "Completa el correo y acepta la autorización para descargar el manifiesto.";
      return;
    }

    const downloadUrl = leadForm.dataset.download || "./assets/manifiesto-con-criterio.pdf";
    const formData = new FormData(leadForm);
    const isFormspreeConfigured = !leadForm.action.includes("REEMPLAZAR_ID_FORM");

    leadStatus.textContent = "Preparando descarga...";

    try {
      if (isFormspreeConfigured) {
        const response = await fetch(leadForm.action, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("No se pudo registrar el lead.");
        }
      }

      leadForm.reset();
      leadStatus.innerHTML = `Listo. Puedes descargar el manifiesto aquí: <a href="${downloadUrl}" download>Descargar PDF</a>.`;
    } catch (error) {
      leadStatus.innerHTML = `No pudimos registrar la solicitud automáticamente. Escríbenos a <a href="mailto:contacto@concriterio.cl">contacto@concriterio.cl</a> y te enviaremos el manifiesto.`;
    }
  });
}
