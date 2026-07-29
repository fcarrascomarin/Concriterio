# Revisión técnica final · Con Criterio 1.0

Fecha: 29 de julio de 2026

## Validaciones ejecutadas

- Revisión de enlaces relativos y anclas internas: sin referencias rotas.
- Revisión de IDs duplicados: no detectados.
- Sintaxis de `js/main.js` validada con Node.js.
- `site.webmanifest` parseado correctamente como JSON.
- Búsqueda en páginas públicas de nombres y slogans obsoletos: sin coincidencias.
- Validación responsive en 1440×900, 1366×768, 1024×768, 768×1024, 390×844 y 360×800.
- Sin desbordamiento horizontal en las páginas principales en todos los tamaños probados.
- En 1440×900 y 1366×768, las secciones `.screen-section` caben dentro de la altura útil de una pantalla de escritorio.
- Menú móvil comprobado con panel bajo el encabezado, fondo opaco, bloqueo de scroll, `aria-expanded` y cierre con `Escape`.
- Formulario mantiene labels, validación nativa, honeypot y mensajes con `aria-live`.
- Imagen Open Graph actualizada a la identidad Con Criterio 1.0.

## Comprobaciones después de publicar

- Confirmar que GitHub Pages sirva `css/styles.css?v=20260729-cc1` y `js/main.js?v=20260729-cc1`.
- Probar el formulario desde teléfono y computador y activar FormSubmit si solicita verificación.
- Revisar Chrome, Safari y Firefox en dispositivos reales.
- Comprobar vista previa al compartir en LinkedIn, WhatsApp y otras redes.
