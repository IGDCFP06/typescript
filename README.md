# typescript

Repositorio independiente para la Práctica 4 (Módulos 1 y 2).

## Estructura

```text
typescript/
  modulo-1/
    src/
    dist/
    docs/
  modulo-2/
    src/
      domain/
        types/
      services/
    docs/
```

## Objetivo

- `modulo-1`: inicialización TypeScript, utilidades matemáticas tipadas y compilación.
- `modulo-2`: modelado de dominio, unión discriminada `EstadoMatricula`, servicio genérico `obtenerRecurso<T>`, documentación técnica.

## Comandos sugeridos por módulo

### modulo-1

```bash
cd modulo-1
npm init -y
npm i -D typescript tsx
npx tsc --init
npx tsx src/index.ts
npx tsc
```

### modulo-2

```bash
cd modulo-2
npm init -y
npm i -D typescript tsx
npx tsc --init
npx tsx src/index.ts
npx tsc --noEmit
```

