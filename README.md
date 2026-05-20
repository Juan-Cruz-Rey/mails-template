# COTO Mail Templates

Sistema de templates de mail para COTO. Todos los mails comparten una misma cáscara (header, bloques de contacto, advertencia, legal y footer) y solo varía el contenido central de cada uno.

## Estructura

```
mails-template/
├── assets/                  Imágenes finales que usan los mails (logo y heros)
├── data/                    Un JSON por template: define título, hero, partial y variables
├── styles/
│   └── mail.css             Estilos compartidos (BEM + responsive)
├── templates/
│   ├── base.html            Cáscara común con placeholders {{title}}, {{hero_img}}, {{body}}
│   └── partials/            Contenido único de cada template (lo que va entre el título y el bloque de contacto)
├── dist/                    Output compilado — generado por el build, no editar a mano
├── figma/                   Mockups de referencia (no se usan en build)
├── build.js                 Script que compila base + partial + data + css → dist/
└── package.json
```

## Cómo funciona

1. `base.html` define la estructura común de todos los mails.
2. Cada mail tiene un **partial** en `templates/partials/` con su contenido único.
3. Cada mail tiene un **JSON** en `data/` que define:
   - `output`: nombre del archivo final
   - `partial`: qué partial usar
   - `hero_img`: ruta a la imagen del hero
   - `title`: título del mail
   - Variables adicionales que use el partial (ej: `phone`, `amount`, etc.)
4. `build.js` toma cada JSON, reemplaza los `{{placeholders}}` en `base.html` y el partial, inlinea el CSS de `mail.css` con [juice](https://github.com/Automattic/juice), y escribe el HTML final en `dist/`.

## Cómo previsualizar / generar los mails

```bash
npm install
npm run build
```

Esto genera un HTML por cada JSON de `data/` en la carpeta `dist/`. Abrí cualquiera en el browser para previsualizar.

## Cómo agregar un nuevo template

1. Agregar la imagen del hero en `assets/` (ej: `img-mi-template.png`).
2. Crear el partial en `templates/partials/body-mi-template.html` con el contenido único.
3. Crear el JSON en `data/mi-template.json`:
   ```json
   {
     "output": "mi-template.html",
     "partial": "body-mi-template.html",
     "hero_img": "assets/img-mi-template.png",
     "title": "Título del mail"
   }
   ```
4. Correr `npm run build`.

## Variables dinámicas

Los `{{placeholders}}` en JSONs y partials (ej: `{{nombre}}`, `{{amount}}`) se mantienen en el HTML compilado, listos para que la plataforma de envío (Mailchimp, SendGrid, etc.) los reemplace por los datos reales del destinatario.

## Convención de estilos

Los estilos en `mail.css` usan **BEM**:
- Block: `.email`
- Elements: `.email__header`, `.email__title`, `.email__block`
- Modifiers: `.email__block--contact`, `.email__block--warning`, `.email__block--legal`

El responsive se maneja con un único media query a `max-width: 600px`. No se usa Grid ni Flexbox porque los clientes de mail (Outlook en particular) tienen soporte muy limitado — la estructura usa tablas.
