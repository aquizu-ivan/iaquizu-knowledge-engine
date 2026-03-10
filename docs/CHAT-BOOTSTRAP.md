# Chat Bootstrap — IAQUIZU Knowledge Engine

Este archivo permite iniciar un nuevo chat con contexto suficiente del proyecto.

## Proyecto

IAQUIZU Knowledge Engine es un motor de conocimiento diseñado como SaaS potencial,
basado en arquitectura monorepo y construido incrementalmente mediante tickets.

El proyecto sigue el flujo de desarrollo IAQUIZU.

## Orden de lectura obligatorio

Antes de responder o proponer cambios, leer los siguientes documentos:

1. docs/PRODUCT-BLUEPRINT.md
2. docs/ARCHITECTURE.md
3. docs/DESIGN-SPEC.md
4. docs/TICKET-PLANNER.md

Estos documentos son la fuente de verdad del proyecto.

Si el sistema no puede acceder automáticamente a ellos,
debe solicitar su contenido antes de continuar.

## Flujo de desarrollo

El proyecto se desarrolla usando un sistema de tickets.

Cada ticket puede tener múltiples bloques.

Reglas:

- trabajar por tickets
- cada ticket dividido en bloques
- cerrar cada bloque antes de avanzar
- no adelantar alcance técnico
- actualizar siempre docs/TICKET-PLANNER.md al cerrar un bloque

## Regla de continuidad

Siempre continuar desde el ticket y bloque activos indicados en:

docs/TICKET-PLANNER.md

No saltar pasos.

## Regla arquitectónica

No modificar la arquitectura del proyecto sin justificarlo explícitamente.

Respetar siempre:

- monorepo apps/packages
- separación entre web, api y engine
- evolución incremental del sistema
