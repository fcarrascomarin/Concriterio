// Normaliza la URL principal cuando el hosting expone /index.html.
if (window.location.pathname.endsWith('/index.html')) {
  const cleanPath = window.location.pathname.replace(/index\.html$/, '');
  window.history.replaceState(null, '', `${cleanPath}${window.location.search}${window.location.hash}`);
}

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('[data-menu]');
const year = document.querySelector('#year');
const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');
const revealItems = document.querySelectorAll('.reveal');

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 18);
};

const closeMenu = () => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  menu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

if (header) {
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMenu();
  });
}

const page = document.documentElement.dataset.page;
if (page) {
  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('is-active');
    activeLink.setAttribute('aria-current', 'page');
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -45px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (form && statusMessage) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusMessage.className = 'form-status';

    if (!form.checkValidity()) {
      form.reportValidity();
      statusMessage.textContent = 'Revisa los campos obligatorios antes de enviar.';
      statusMessage.classList.add('is-error');
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const originalLabel = button.textContent;
    button.disabled = true;
    button.textContent = 'Enviando…';
    statusMessage.textContent = 'Estamos enviando tu consulta.';

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('No se pudo completar el envío');
      form.reset();
      statusMessage.textContent = 'Gracias. Recibimos tu consulta y la revisaremos desde contacto@concriterio.cl.';
      statusMessage.classList.add('is-success');
    } catch (error) {
      statusMessage.innerHTML = 'No fue posible enviar el formulario. Puedes escribir directamente a <a href="mailto:contacto@concriterio.cl">contacto@concriterio.cl</a>.';
      statusMessage.classList.add('is-error');
    } finally {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  });
}
