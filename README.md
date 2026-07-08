# Con Criterio — web estática actualizada

Base en **HTML + CSS + JS** para publicar en GitHub Pages y editar en Visual Studio Code.

## Versión actual

Esta versión ajusta la vitrina pública de Con Criterio a la arquitectura definida en la conversación fundacional y sus actualizaciones recientes:

- Hero reposicionado desde “consultora de seguridad” hacia una brújula para decisiones complejas.
- Tríada central visible: **evidencia, vínculo y contexto territorial**.
- Servicios iniciales reformulados: formación aplicada, **Mapa Inicial Con Criterio®** y diagnóstico participativo con diseño de respuestas.
- Método expresado como **Brújula Con Criterio** y proceso: encuadrar, escuchar, observar, contrastar, analizar y orientar.
- Observatorio ampliado hacia seguridad, convivencia, justicia, territorio, confianza institucional y decisiones complejas.
- Sección de equipo actualizada para presentar a Benjamín y Francisca como roles estructurales e interdisciplinarios.
- Contacto orientado a conversaciones sobre problemas complejos, no solo a pedidos de servicios cerrados.

## Estructura

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

Puedes abrir `index.html` directamente en el navegador. Si quieres un entorno local más parecido al servidor:

```bash
python -m http.server 8000
```

Luego abre:

```txt
http://localhost:8000
```

## Cómo publicar en GitHub Pages

1. Crea o abre el repositorio donde estará el sitio.
2. Sube todos estos archivos a la raíz del repositorio.
3. En GitHub: `Settings > Pages`.
4. Selecciona `Deploy from a branch`.
5. Rama: `main`; carpeta: `/root`.
6. Guarda y espera el despliegue.

## Dominio

El archivo `CNAME` ya contiene:

```txt
www.concriterio.cl
```

En GitHub Pages también debes configurar el dominio personalizado desde `Settings > Pages`. El archivo `CNAME` ayuda a conservar la configuración en el repositorio, pero no reemplaza la configuración del panel.

## Formulario de contacto

Esta primera versión no usa backend. El formulario prepara un correo a:

```txt
contacto@concriterio.cl
```

Si quieres recibir formularios sin depender del cliente de correo del usuario, reemplaza luego este sistema por Formspree, Basin, Web3Forms, Cloudflare Worker o backend propio.

## Buenas prácticas incluidas

- HTML semántico.
- CSS con variables.
- Diseño responsivo.
- Menú móvil accesible.
- Foco visible para navegación por teclado.
- Metadatos SEO básicos.
- `robots.txt`, `sitemap.xml`, `404.html`, `CNAME`, `.nojekyll`.
- Sin frameworks ni dependencias externas.
- Sin claves ni secretos en frontend.
