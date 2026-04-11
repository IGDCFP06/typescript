# Modulo 1 - Inicializacion y logica pura

En este modulo se implementa un bloque matematico estricto en TypeScript:

- `calcularMedia(datos): number | null`
- `calcularMediana(datos): number | null`
- `filtrarAtipicos(datos, limite): number[]`

Decisiones de diseno:

- Se usa `readonly number[]` para comunicar que las funciones no deben mutar el input.
- Los arrays vacios devuelven `null` cuando no existe un resultado matematico valido.
- `filtrarAtipicos` utiliza z-score y valida `limite >= 0`.

Comandos:

```bash
npm install
npm run dev
npm run build
npm run check
```
