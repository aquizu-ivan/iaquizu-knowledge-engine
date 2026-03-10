# IAQUIZU Knowledge Engine

IAQUIZU Knowledge Engine es la base tecnica para una plataforma de conocimiento con `apps/web` (cliente) y `apps/api` (servicio HTTP), organizada en monorepo.

## Estructura general

```text
apps/
  web/
  api/
packages/
  ui/
  ai-engine/
  knowledge-core/
docs/
```

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
# web
npm run dev:web

# api
npm run dev:api

# web + api
npm run dev
```

## Variables de entorno minimas actuales

- `apps/api/.env.example`
  - `PORT=4000`

## Documentacion clave

- `docs/PRODUCT-BLUEPRINT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-SPEC.md`
- `docs/TICKET-PLANNER.md`
