# Con Criterio 1.0 — sitio comercial

Sitio estático en HTML, CSS y JavaScript preparado para GitHub Pages y `www.concriterio.cl`.

## Arquitectura pública

- `index.html`: propuesta de valor, situaciones reconocibles, marco de análisis, tres servicios, método, independencia, dirección y contacto.
- `servicios.html`: Taller de Criterio Aplicado, Mapa de Respuesta Institucional y Mesa de Criterio.
- `metodo.html`: marco Situación + Respuesta Institucional + Capacidad Institucional, seis acciones y disciplina de evidencia.
- `nosotros.html`: dirección, modelo de trabajo, principios y origen en el Biobío.
- `privacidad.html`: aviso asociado al formulario.
- `404.html`: página de error propia.

## Criterios técnicos

- Sin frameworks ni dependencias externas de interfaz.
- HTML semántico, foco visible, skip link y respeto por `prefers-reduced-motion`.
- Menú móvil desplegable bajo el encabezado, con fondo opaco, bloqueo de scroll y cierre por enlace, clic externo o tecla `Escape`.
- Sin desbordamiento horizontal en los anchos validados entre 360 y 1440 px.
- En escritorio (1366×768 y 1440×900), las secciones narrativas con clase `screen-section` están dimensionadas para caber dentro de una navegación de una pantalla sin recortar contenido.
- En tablet y móvil se desactiva deliberadamente la altura de pantalla completa para priorizar lectura natural y evitar superposiciones o contenido recortado.
- CSS y JS versionados con `?v=20260729-cc1` para invalidar caché tras la publicación.

## Formulario

El formulario usa el endpoint AJAX de FormSubmit para enviar a `contacto@concriterio.cl`.

La primera vez que se utilice en producción, FormSubmit puede enviar un correo de confirmación a esa cuenta. El formulario incorpora validación nativa, honeypot, estado accesible y fallback a correo directo.

No deben ingresarse antecedentes sensibles, reservados ni datos personales de terceros.

## Probar localmente

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Publicación

1. Copiar **el contenido de esta carpeta** a la raíz real del repositorio.
2. Mantener `CNAME` con `www.concriterio.cl`.
3. Publicar GitHub Pages desde la rama y carpeta configuradas.
4. Abrir el sitio en una ventana privada y comprobar la nueva versión.
5. Probar menú, enlaces, formulario y vista previa social.

## Evolución

La web refleja Con Criterio 1.0. Los cambios de producto, posicionamiento o método deben provenir de decisiones ya validadas, no de modificaciones aisladas de copy.
