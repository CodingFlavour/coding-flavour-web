# Coding Flavour Web

## ¿Qué es?

La web oficial de la marca Coding Flavour. Funciona como portfolio y blog técnico — un sitio donde mostrar lo que construye el equipo y documentar lo que el equipo aprende.

Construida con Next.js 15 App Router y Server Components. Las páginas se renderizan completamente en el servidor, así que el navegador recibe HTML completo sin esperar hidratación en cliente. Completamente bilingüe (inglés y español).

---

## ¿Cómo se usa?

### Local

**Requisitos previos:** Node.js 18+

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_DOMAIN=http://localhost
NEXT_PUBLIC_DOMAIN_SEPARATOR=:
NEXT_PUBLIC_PORT=3004
NEXT_PUBLIC_SUBDOMAIN=
```

```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:3004`.

### Producción

El proyecto está desplegado en Vercel. Cada push a `main` dispara un despliegue a producción. Las ramas de feature generan preview deployments automáticamente.

---

## ¿Cómo funciona?

### Routing e internacionalización

Todas las rutas viven bajo `src/app/[lang]/`. El segmento `[lang]` captura el idioma activo (`en` o `es`) y cada página lo recibe como prop.

El middleware (`src/middleware.ts`) gestiona la detección de idioma en este orden:

1. Prefijo en la URL (`/en/…`, `/es/…`)
2. Cookie de idioma guardada en la primera visita
3. Cabecera `Accept-Language` del navegador

El contenido (artículos, proyectos, cadenas de UI) vive como archivos JSON bajo `src/data/locales/` y se carga en tiempo de build por idioma mediante `getDictionary`.

### Modelo de contenido

Los artículos y proyectos se guardan como archivos JSON bajo `src/data/locales/`. Añadir contenido nuevo significa crear un JSON en la carpeta correcta para cada idioma. Sin CMS, sin base de datos — el sistema de archivos es la fuente de verdad.

### Arquitectura

El proyecto sigue las convenciones de frontend de Coding Flavour:

```
src/
├── app/[lang]/          # Páginas — solo estructura, sin lógica
├── data/
│   ├── Models/          # Tipos TypeScript
│   ├── Statics/         # JSON estático (menú, valores)
│   └── locales/         # Contenido i18n por idioma
├── hooks/               # Hooks React reutilizables
├── presentation/
│   ├── components/      # Piezas de UI autocontenidas
│   ├── layouts/         # Secciones de página (Header, Footer, HeroPage…)
│   └── styles/          # SCSS global (grid, tipografía, colores, animaciones)
├── services/            # Acceso a datos de artículos y proyectos
├── utils/               # Utilidades compartidas
└── middleware.ts        # Detección de idioma y routing

validations/
├── unit-tests/          # Jest + React Testing Library
└── e2e-tests/           # Playwright (Chromium)
    ├── home/
    ├── navbar/
    ├── security/
    └── lib/             # Helpers de test compartidos
```

---

## ¿Cómo ejecutar el proyecto?

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Arrancar el servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Arrancar el servidor de producción |
| `npm run lint` | Ejecutar ESLint |
| `npm run test` | Ejecutar todos los tests (unit + e2e) |
| `npm run test:unit` | Solo tests unitarios |
| `npm run test:e2e` | Tests E2E sin interfaz |
| `npm run test:e2e:ui` | Tests E2E con la UI de Playwright |

### Ejecutar tests

Los tests unitarios viven en `validations/unit-tests/` y cubren componentes y lógica de datos.

```bash
npm run test:unit
```

Los tests E2E viven en `validations/e2e-tests/` y se ejecutan sobre Chromium. Playwright arranca el servidor de desarrollo automáticamente si no está corriendo. Los reportes HTML se generan en `playwright-report/` tras cada ejecución.

```bash
npm run test:e2e
```

---

## Notas relevantes

**Añadir un nuevo idioma:** Actualiza `i18n.config.js` y crea los archivos JSON correspondientes bajo cada carpeta de contenido (`languages`, `articles`, `projects`).

**Añadir un artículo o proyecto nuevo:** Crea un archivo JSON bajo `src/data/locales/articles/` o `src/data/locales/projects/` para cada idioma, siguiendo la estructura de cualquier archivo existente en la misma carpeta.

**Estilos:** SCSS Modules por componente y layout. Los estilos globales (grid, tipografía, colores, animaciones) viven en `src/presentation/styles/`.

---

## Contribuir

Sigue los estándares Git de Coding Flavour: parte desde `main` usando la convención `{major}.{nombreFeature}`, abre una PR y espera revisión antes de mergear. Nunca commits directos a `main`.
