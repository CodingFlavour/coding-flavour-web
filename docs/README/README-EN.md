# Coding Flavour Web

## What is it?

The official website for the Coding Flavour brand. It works as a portfolio and a technical blog — a place to show what the team builds and document what the team learns.

Built with Next.js 15 App Router and Server Components. Pages are fully rendered on the server, which means the browser receives complete HTML without waiting for client-side hydration. Fully bilingual (English and Spanish).

---

## How is it used?

### Local

**Prerequisites:** Node.js 18+

Create a `.env.local` file in the project root:

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

The app will be available at `http://localhost:3004`.

### Production

The project is deployed on Vercel. Every push to `main` triggers a production deployment. Feature branches get preview deployments automatically.

---

## How does it work?

### Routing and internationalisation

All routes live under `src/app/[lang]/`. The `[lang]` segment captures the active locale (`en` or `es`) and every page receives it as a prop.

The middleware (`src/middleware.ts`) handles locale detection in this order:

1. URL prefix (`/en/…`, `/es/…`)
2. A locale cookie persisted on first visit
3. The browser `Accept-Language` header

Content (articles, projects, UI strings) lives as JSON files under `src/data/locales/` and is loaded at build time per locale via `getDictionary`.

### Content model

Articles and projects are stored as JSON files under `src/data/locales/`. Adding a new piece of content means creating a JSON file in the right folder for each language. No CMS, no database — the filesystem is the source of truth.

### Architecture

The project follows the Coding Flavour frontend conventions:

```
src/
├── app/[lang]/          # Pages — structure only, no logic
├── data/
│   ├── Models/          # TypeScript types
│   ├── Statics/         # Static JSON (menu, values)
│   └── locales/         # i18n content per locale
├── hooks/               # Reusable React hooks
├── presentation/
│   ├── components/      # Self-contained UI pieces
│   ├── layouts/         # Page sections (Header, Footer, HeroPage…)
│   └── styles/          # Global SCSS (grid, typography, colors, animations)
├── services/            # Article and project data access
├── utils/               # Shared utilities
└── middleware.ts        # Locale detection and routing

validations/
├── unit-tests/          # Jest + React Testing Library
└── e2e-tests/           # Playwright (Chromium)
    ├── home/
    ├── navbar/
    ├── security/
    └── lib/             # Shared test helpers
```

---

## How to run it?

### Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run all tests (unit + e2e) |
| `npm run test:unit` | Unit tests only |
| `npm run test:e2e` | E2E tests headless |
| `npm run test:e2e:ui` | E2E tests with Playwright UI |

### Running tests

Unit tests live in `validations/unit-tests/` and cover components and data logic.

```bash
npm run test:unit
```

E2E tests live in `validations/e2e-tests/` and run against Chromium. Playwright starts the dev server automatically if it is not already running. HTML reports are generated in `playwright-report/` after each run.

```bash
npm run test:e2e
```

---

## Relevant notes

**Adding a new locale:** Update `i18n.config.js` and create the corresponding JSON files under each content folder (`languages`, `articles`, `projects`).

**Adding a new article or project:** Create a JSON file under `src/data/locales/articles/` or `src/data/locales/projects/` for each language, following the structure of any existing file in the same folder.

**Styles:** SCSS Modules per component and layout. Global styles (grid, typography, colors, animations) live in `src/presentation/styles/`.

---

## Contributing

Follow the Coding Flavour Git standards: branch from `main` using the `{major}.{featureName}` convention, open a PR and get it reviewed before merging. Never commit directly to `main`.
