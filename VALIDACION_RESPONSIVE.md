# Validación responsive · Con Criterio 1.0

Fecha: 29 de julio de 2026

No se detectó desbordamiento horizontal en las páginas principales y tamaños probados.

| Página | 1440×900 | 1366×768 | 1024×768 | 768×1024 | 390×844 | 360×800 |
|---|---:|---:|---:|---:|---:|---:|
| `index.html` | OK | OK | OK | OK | OK | OK |
| `servicios.html` | OK | OK | OK | OK | OK | OK |
| `metodo.html` | OK | OK | OK | OK | OK | OK |
| `nosotros.html` | OK | OK | OK | OK | OK | OK |

## Pantalla completa en escritorio

Las secciones principales usan `.screen-section` con una altura mínima equivalente a la pantalla útil bajo el encabezado. En los dos tamaños de escritorio probados (1440×900 y 1366×768), ninguna sección narrativa principal requiere más de una pantalla para mostrar su contenido completo.

## Tablet y móvil

A partir de 1080 px hacia abajo se elimina deliberadamente la altura mínima de pantalla completa. Así el contenido crece de forma natural, sin quedar comprimido, recortado o superpuesto.

El menú móvil:

- se abre debajo del header;
- usa fondo opaco;
- permanece dentro del ancho de pantalla;
- puede desplazarse si la altura disponible fuese insuficiente;
- bloquea el scroll de fondo mientras está abierto;
- se cierra al elegir un enlace, pulsar fuera, presionar `Escape` o volver a escritorio.
