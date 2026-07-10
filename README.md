# Con Criterio — web pública depurada

Sitio estático en **HTML + CSS + JS** para publicar en GitHub Pages.

Esta versión deja la web como vitrina institucional sobria: muestra identidad, foco, método, entregables posibles, límites éticos, equipo y contacto. No expone comentarios internos, líneas futuras, manifiestos, observatorio ampliado, precios, pilotos ni arquitectura estratégica del proyecto.

## Estructura pública

La home queda ordenada así:

1. Inicio
2. Qué es Con Criterio
3. Para quiénes trabajamos
4. Qué problemas ayudamos a ordenar
5. Cómo trabajamos
6. Qué podemos entregar
7. Lo que no hacemos
8. Equipo
9. Contacto

## Principios de esta versión

- Lenguaje profesional, claro y no academicista.
- Foco transversal: municipalidades, empresas, universidades, colegios, servicios públicos, fundaciones, organizaciones sociales y comunidades.
- Servicios presentados como posibilidades, no como catálogo rígido.
- Sin duraciones, precios ni promesas sobredimensionadas en la web pública.
- Sin Observatorio, manifiesto, publicaciones futuras ni marcadores de alianzas/logos.
- Formulario breve para solicitar una primera conversación.
- Advertencia visible para no ingresar datos sensibles ni antecedentes personales de terceros.

## Archivos principales

```txt
/
├─ index.html
├─ 404.html
├─ CNAME
├─ .nojekyll
├─ robots.txt
├─ sitemap.xml
├─ site.webmanifest
├─ assets/
│  ├─ logo-concriterio-prototipo.png
│  ├─ compass.svg
│  └─ favicon.svg
├─ css/
│  └─ styles.css
└─ js/
   └─ main.js
```

## Cómo probar localmente

Puedes abrir `index.html` directamente en el navegador. Para probar con servidor local:

```bash
python -m http.server 8000
```

Luego abre:

```txt
http://localhost:8000
```

## Publicación en GitHub Pages

1. Subir todos los archivos a la raíz del repositorio.
2. En GitHub: `Settings > Pages`.
3. Seleccionar `Deploy from a branch`.
4. Rama: `main`; carpeta: `/root`.
5. Guardar y esperar el despliegue.
6. Verificar que el dominio use el archivo `CNAME` con `www.concriterio.cl`.
7. Limpiar caché del navegador o CDN si la versión pública sigue mostrando la página anterior.

## Formulario de contacto

El formulario no usa backend. Prepara un correo a:

```txt
contacto@concriterio.cl
```

Si más adelante se quiere captura directa de formularios, se puede integrar Formspree, Basin, Web3Forms, Cloudflare Worker o backend propio. Esa integración debe cuidar privacidad y no solicitar datos sensibles.
