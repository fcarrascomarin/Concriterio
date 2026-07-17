# Cambios realizados — Con Criterio

Fecha: 16 de julio de 2026

## Estrategia y arquitectura

- La portada deja de contener toda la arquitectura interna y funciona como puerta comercial.
- Menú reducido a: Qué hacemos, Servicios, Método, Equipo y Conversar.
- Se crean páginas interiores para Servicios, Método y Equipo/Origen.
- Se reduce la densidad y se eliminan repeticiones conceptuales.

## Oferta

- Se mantienen solo los tres servicios validados.
- El Mapa Inicial aparece como servicio principal de entrada.
- Cada servicio explica situación, actividades, entregables, duración, continuidad y límites.

## Marca y estética

- Sistema editorial institucional situado.
- Mayor espacio, contraste jerárquico y variedad de composiciones.
- Brújula visual propia, método como recorrido y situaciones como lista editorial.
- Se reemplaza la repetición de tarjetas y numeraciones.
- Se incluye imagen social Open Graph y gráfico territorial propio.

## Credibilidad

- Ejemplos visuales de mapa de actores, matriz de evidencia y ruta inicial.
- Equipo descrito con responsabilidades precisas.
- Francisca: Dirección de Operaciones y Diseño de Sistemas.
- Ámbitos de experiencia reorganizados sin encerrar la marca en el sistema penal.

## Conversión

- CTA principal: “Conversemos sobre una situación”.
- Formulario AJAX real con FormSubmit, validación, honeypot y fallback por correo.
- Campos para cargo, organización, situación, decisión y plazo.

## Técnica

- Diseño responsive para escritorio, tablet y móvil.
- Menú accesible, foco visible, skip link y respeto por `prefers-reduced-motion`.
- SEO por página, sitemap actualizado y metadatos sociales completos.

## Corrección responsive y de carga CSS — revisión posterior

- Se corrigió una colisión de precedencia en CSS: las reglas generales de grilla estaban reabriendo columnas múltiples después de los breakpoints, lo que estrechaba el texto y multiplicaba la altura de la portada en pantallas pequeñas.
- Se redujeron títulos, separaciones, alturas mínimas y tarjetas para evitar una página artificialmente extendida.
- El hero ahora cabe en una pantalla habitual de escritorio, tablet y teléfono, con una composición específica para móviles pequeños.
- La muestra de herramientas se transforma en un carrusel horizontal táctil en móvil, evitando una pila vertical excesiva.
- Se añadieron límites de ancho y `min-width: 0` a los contenedores de grilla para impedir desbordamientos.
- Se agregó versionado a `styles.css` y `main.js` para forzar la actualización después de publicar y evitar que el navegador conserve la hoja anterior.
- Se incorporó el archivo faltante `assets/territory.svg`, que provocaba una imagen rota en la portada y en la página de equipo.
- Se incorporó realmente `assets/og-concriterio.png`, que estaba declarado en los metadatos pero no existía en el proyecto.
- Se verificaron las cuatro páginas en anchos de 360, 390, 768, 1024, 1366 y 1440 píxeles, sin desbordamiento horizontal.
- La extensión de la portada se redujo aproximadamente un 21% en portátil y un 25% en móvil respecto de la versión recibida.
