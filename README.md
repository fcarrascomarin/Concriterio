# Con Criterio — sitio comercial consolidado (julio 2026)

Sitio estático en **HTML, CSS y JavaScript** preparado para GitHub Pages y el dominio `www.concriterio.cl`.

Esta versión incorpora la identidad y arquitectura comercial consolidada del proyecto: **Seguridad con evidencia, vínculo y territorio**. La web ya no presenta una lista dispersa de entregables; organiza la propuesta alrededor de tres líneas, tres servicios de entrada, seis acciones metodológicas, salvaguardas éticas, equipo y una primera conversación.

## Arquitectura pública

1. Hero: promesa y posición.
2. Por qué existe Con Criterio.
3. Brújula: evidencia, vínculo y territorio.
4. Tres líneas de trabajo.
5. Situaciones abordables.
6. Tres servicios de entrada.
7. Método de seis acciones.
8. Salvaguardas y límites.
9. Origen desde el Biobío y equipo.
10. Primera conversación.

## Servicios de entrada

- Taller Seguridad con Evidencia.
- Mapa Inicial de Seguridad y Convivencia.
- Diagnóstico Participativo y Cartera de Proyectos.

Los informes, mapas de actores, devoluciones y apoyos de implementación se integran como componentes de estos servicios cuando corresponde, no como productos autónomos.

## Método

1. Encuadrar.
2. Escuchar.
3. Observar.
4. Contrastar.
5. Analizar.
6. Orientar.

## Características técnicas

- Navegación sticky que se reduce al hacer scroll.
- Menú móvil accesible y cerrable con Escape.
- Indicador de sección activa.
- Animaciones discretas con soporte para `prefers-reduced-motion`.
- Diseño responsive para escritorio, tablet y móvil.
- Metadatos SEO y Open Graph.
- Enlaces canónicos, sitemap y robots.
- Formulario de contacto sin backend, mediante `mailto:`.
- Advertencia y confirmación para evitar datos sensibles.
- Sin dependencias externas ni rastreadores.

## Probar localmente

Desde la carpeta raíz:

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Publicación en GitHub Pages

1. Reemplazar el contenido del repositorio por los archivos de esta carpeta.
2. Confirmar que `CNAME` contiene `www.concriterio.cl`.
3. En GitHub, usar `Settings > Pages > Deploy from a branch`.
4. Seleccionar rama `main` y carpeta `/root`.
5. Limpiar caché del navegador o CDN tras el despliegue.

## Formulario

El formulario prepara un correo a `contacto@concriterio.cl` desde la aplicación de correo del dispositivo. No almacena datos.

Para captura directa futura se requerirá un endpoint externo o backend con medidas de privacidad y seguridad adecuadas.
