# Instrucciones de publicación y activación

## 1. Publicar

1. Reemplazar en el repositorio los archivos de la versión anterior por esta carpeta.
2. Mantener `CNAME` con el valor `www.concriterio.cl`.
3. Publicar desde la rama `main` y la carpeta raíz en GitHub Pages.
4. Revisar en escritorio y teléfono que las cuatro páginas carguen:
   - `/`
   - `/servicios.html`
   - `/metodo.html`
   - `/nosotros.html`

## 2. Activar el formulario

El formulario de contacto ya no abre la aplicación de correo: envía la consulta mediante FormSubmit.

1. Con el sitio publicado, completar una consulta de prueba.
2. Revisar la bandeja de entrada y spam de `contacto@concriterio.cl`.
3. Abrir el mensaje de FormSubmit y confirmar la dirección.
4. Repetir la prueba desde un teléfono y desde un computador.
5. Verificar que el mensaje recibido contenga todos los campos.

La primera utilización provoca el correo de confirmación. Mientras no se active, FormSubmit puede conservar temporalmente las consultas y enviarlas después de la confirmación.

## 3. Consideración de privacidad

El formulario prohíbe incluir información sensible o datos personales de terceros. FormSubmit es un proveedor externo y declara retener los envíos durante 30 días. Para una etapa posterior, especialmente si la web comenzara a recibir antecedentes reservados, conviene reemplazarlo por un backend propio o un proveedor contratado con política de tratamiento definida.

## 4. Controles finales

- Probar todos los enlaces del menú y footer.
- Confirmar que `contacto@concriterio.cl` recibe mensajes.
- Revisar que la imagen social aparezca al compartir la web.
- Limpiar caché después del despliegue.
- No agregar todavía analítica, cookies o rastreadores sin definir proveedor y aviso de privacidad.
