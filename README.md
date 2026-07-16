# Con Criterio — sitio comercial actualizado (julio 2026)

Sitio estático en HTML, CSS y JavaScript para GitHub Pages y `www.concriterio.cl`.

## Arquitectura

- `index.html`: portada comercial breve.
- `servicios.html`: detalle de los tres servicios de entrada.
- `metodo.html`: Brújula, seis acciones, herramientas y base metodológica.
- `nosotros.html`: identidad, equipo, ámbitos de experiencia y origen en el Biobío.
- `404.html`: página de error propia.

## Cambios principales

- Portada reducida y jerarquizada.
- Menú simplificado a cinco destinos.
- Mapa Inicial destacado como servicio principal.
- Brújula convertida en recurso visual de marca.
- Método presentado como recorrido, no como catálogo de tarjetas.
- Cuatro situaciones abordables y cuatro salvaguardas esenciales.
- Sección de prueba metodológica con ejemplos visuales.
- Cargo de Francisca actualizado a Dirección de Operaciones y Diseño de Sistemas.
- Sistema visual editorial institucional: azul profundo, marfil, verde apagado y cobre.
- Imagen Open Graph real incluida.
- Mejoras responsive, accesibilidad y SEO.

## Formulario real

El formulario usa el endpoint AJAX de FormSubmit para enviar a `contacto@concriterio.cl`.

**Activación inicial:** FormSubmit enviará un correo de confirmación a `contacto@concriterio.cl` la primera vez que se use el formulario en producción. Debe abrirse ese correo y activar el formulario. Hasta completar esa activación, los mensajes no llegarán normalmente.

El formulario incluye validación, honeypot y fallback visible a correo directo. Se mantiene la advertencia de no ingresar información sensible.

## Probar localmente

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Publicación en GitHub Pages

1. Reemplazar el contenido del repositorio por estos archivos.
2. Confirmar que `CNAME` mantiene `www.concriterio.cl`.
3. Publicar desde la rama `main`, carpeta raíz.
4. Limpiar caché del navegador o CDN.
5. Realizar un envío de prueba y activar FormSubmit desde el correo recibido.

## Pendientes que requieren insumos externos

- Sustituir monogramas por retratos profesionales cuando estén disponibles.
- Conectar analítica solo después de elegir proveedor y política de privacidad.
- Crear casos demostrables a medida que existan trabajos autorizados o anonimizados.

### Privacidad del formulario

FormSubmit es un proveedor externo y declara retener los envíos durante 30 días. Por eso la interfaz exige no incluir antecedentes sensibles. Para una etapa con mayor volumen o información reservada, debe migrarse a un backend propio o a un proveedor contratado con política de tratamiento definida.
