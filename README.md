# Mails Template

Sistema de templates de email para COTO Digital, construido con [MJML](https://mjml.io/).

## Estructura

```
src/
  components/     # Componentes reutilizables (head, footer)
  templates/      # Un archivo .mjml por template
  config.js       # URLs de imágenes centralizadas
build.js          # Script de compilación
dist/
  <env>/          # Una carpeta por ambiente: dev, test, staging, prod
    body/         # HTML compilado para preview en browser
    general-notification.html  # Wrapper completo para uso en backend
  body/           # Temporales (iguales en todos los ambientes)
```

## Instalación

```bash
npm install
```

## Build

```bash
node build.js           # Compilación única
node build.js --watch   # Modo watch (recompila al guardar)
```

Los HTMLs compilados quedan en `dist/body/`.

## Interpolaciones

El sistema maneja dos tipos de interpolación con sintaxis distinta para no confundirlos.

### 1. Imágenes — `{{CLAVE}}`

Usada para URLs de imágenes (logos, heroes, íconos). Se resuelven en **tiempo de build** por `build.js` leyendo `src/config.js`.

Para cambiar una imagen en todos los templates, basta con editar su valor en `src/config.js`:

```js
// src/config.js
module.exports = {
  LOGO:                    'https://cdn.ejemplo.com/logo.png',
  HERO_INGRESOS_CASH_OUT:  'https://cdn.ejemplo.com/ingresos.png',
  ICON_PERSON:             'https://cdn.ejemplo.com/icon-person.png',
  // ...
};
```

En los `.mjml` se usan como:

```mjml
<mj-image src="{{LOGO}}" />
<img src="{{ICON_PERSON}}" />
```

### 2. Variables de backend — `%{variable}%`

Usada para datos dinámicos que inyecta el backend en tiempo de envío (nombre del usuario, monto, fecha, etc.). El build **no las toca** — llegan tal cual al HTML final para que el sistema de envío las reemplace.

```mjml
%{nombre}%, ya enviamos tu transferencia de %{monto}%
```

| Sintaxis | Resuelta por | Cuándo |
|---|---|---|
| `{{CLAVE}}` | `build.js` + `src/config.js` | Al compilar |
| `%{variable}%` | Backend / sistema de envío | Al enviar el mail |
