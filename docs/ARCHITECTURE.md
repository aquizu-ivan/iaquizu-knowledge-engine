# IAQUIZU Knowledge Engine - Architecture

## Filosofia de arquitectura
- Modularidad primero: cada modulo tiene rol claro y fronteras simples.
- Evolucion incremental: base minima funcional antes de agregar complejidad.
- Trazabilidad: respuestas y estados observables desde etapas tempranas.

## Tipo de arquitectura
Monorepo modular con separacion por `apps/` y `packages/`, priorizando reutilizacion y bajo acoplamiento.

## Estructura del repo
```text
apps/
  web/
  api/
packages/
  ui/
  ai-engine/
  knowledge-core/
docs/
scripts/
```

## Rol de cada modulo
### apps/web
Cliente Next.js para experiencia de consulta y operacion del producto.

### apps/api
Servicio Express para exponer endpoints y centralizar orquestacion backend.

### packages/ui
Biblioteca compartida de componentes y tokens visuales.

### packages/ai-engine
Motor de logica IA para retrieval, contexto y generacion de respuesta.

### packages/knowledge-core
Nucleo de dominio de conocimiento: entidades, contratos y reglas comunes.

## Flujo de ingesta documental (intencion inicial)
1. Recepcion de documento en API.
2. Normalizacion y extraccion de contenido.
3. Segmentacion y estructuracion semantica.
4. Persistencia/indexacion en capa de conocimiento (a definir en tickets futuros).

## Flujo de consulta de usuario (intencion inicial)
1. Usuario consulta desde `apps/web`.
2. `apps/api` recibe, valida y enruta consulta.
3. `packages/ai-engine` compone contexto relevante.
4. Se devuelve respuesta con metadata de version y trazabilidad basica.

## Endpoints iniciales
- `GET /health`: estado operativo del servicio API.
- `GET /version`: version y nombre de servicio activo.

## Observabilidad minima
- Logging por consola al iniciar API.
- Endpoint de salud para monitoreo basico.
- Endpoint de version para trazabilidad de despliegue.

## Deploy objetivo (futuro, sin implementacion en este bloque)
- `apps/web`: despliegue gestionado para frontend Next.js.
- `apps/api`: despliegue en servicio Node gestionado.
- Integracion CI/CD y entornos separados se definira en tickets posteriores.
