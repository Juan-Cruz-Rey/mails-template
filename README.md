# COTO Mail Templates

Sistema de templates de mail para COTO basado en **[MJML](https://mjml.io/)**. Todos los mails comparten una misma cáscara (header, bloques de contacto, advertencia, legal y footer) y solo varía el contenido central de cada uno.

MJML compila a HTML compatible con todos los clientes de mail (incluido Outlook), inlinea el CSS y resuelve el responsive automáticamente.

## Estructura

```
mails-template/
├── assets/                  Imágenes que usan los mails (logo y heros)
├── src/
│   ├── components/          Bloques compartidos por todos los mails (header, footer, blocks, head)
│   └── templates/           Un .mjml por mail
├── dist/                    HTMLs compilados — generado por el build, no editar a mano
├── figma/                   Mockups de referencia (no se usan en build)
├── build.js                 Script de compilación
└── package.json
```

## Cómo usar

```bash
npm install
npm run build         # compila todos los mails a dist/
npm run watch         # recompila al guardar cambios en src/
```

Abrí cualquier archivo de `dist/` en el browser para previsualizar.

## Cómo agregar un nuevo template

1. Agregar la imagen del hero en `assets/` (ej: `mi-template.png`).
2. Crear `src/templates/mi-template.mjml`:

```xml
<mjml>
  <mj-include path="../components/head.mjml" />

  <mj-body background-color="#F6F8F9" width="600px">
    <mj-include path="../components/header.mjml" />

    <mj-section padding="8px 32px">
      <mj-column>
        <mj-image src="../../assets/mi-template.png" alt="" width="320px" padding="0" />
      </mj-column>
    </mj-section>

    <mj-section padding="16px 32px 24px">
      <mj-column>
        <mj-text mj-class="title" padding="0 0 20px">
          {{nombre}}, título del mail
        </mj-text>
        <!-- contenido único acá -->
      </mj-column>
    </mj-section>

    <mj-include path="../components/block-contact.mjml" />
    <mj-include path="../components/block-warning.mjml" />
    <mj-include path="../components/block-legal.mjml" />
    <mj-include path="../components/footer.mjml" />
  </mj-body>
</mjml>
```

3. Correr `npm run build`.

## Variables dinámicas

Los placeholders con doble corchete (`{{nombre}}`, `{{amount}}`, etc.) se mantienen intactos en el HTML compilado. El backend los reemplaza al momento de enviar el mail con cualquier motor de templates (Handlebars, Liquid, Twig, etc.).

## Estilos compartidos

Las clases tipográficas y de bloques están definidas como `mj-class` en `src/components/head.mjml`. Para aplicar un estilo en un template:

```xml
<mj-text mj-class="title">Título rojo</mj-text>
<mj-section mj-class="block-contact">...</mj-section>
```

## Recomendaciones sobre assets

- **Heros (ilustraciones):** exportar como **JPEG**. Tienen muchos colores y pesan 3-5x menos que PNG.
- **Logo:** PNG (necesita transparencia/bordes filosos).
- **SVG:** ❌ no usar. La mayoría de clientes de mail lo bloquean.
- Mantener el peso total del mail por debajo de **102 KB** — arriba de eso Gmail recorta el contenido.
