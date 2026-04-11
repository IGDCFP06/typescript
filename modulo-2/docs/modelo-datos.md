# Modulo 2 - Modelo de datos y decisiones arquitectonicas

## 1) interface vs type

Se usan `interface` para entidades de dominio (`Estudiante`, `Asignatura`) porque:

- representan contratos de objetos con propiedades estables;
- son legibles para trabajo por capas (dominio, servicios, UI);
- escalan bien en proyectos donde el modelo crece.

Se usan `type` para:

- alias semanticos (`UUID`, `PeriodoAcademico`);
- uniones de estado (`EstadoMatricula`).

## 2) Union discriminada para representar estados validos

`EstadoMatricula` se modela con tres estados exclusivos:

- `ACTIVA`
- `SUSPENDIDA`
- `FINALIZADA`

Esto evita combinaciones invalidas (por ejemplo, tener `notaMedia` y `motivo` al mismo tiempo).

## 3) Exhaustiveness checking con never

`generarReporte` usa `switch` + `default` con `never`.
Si en el futuro se agrega un nuevo estado a la union y no se maneja en el `switch`, TypeScript lanza error de compilacion.

## 4) Genericos para desacoplar infraestructura de datos

`obtenerRecurso<T>` encapsula la forma de respuesta en `RespuestaAPI<T>`, manteniendo:

- estructura comun de red (`codigoEstado`, `exito`, `errores`, `timestamp`);
- payload especializado segun el endpoint (`T`).

Beneficio: una sola implementacion soporta muchos tipos sin perder seguridad de tipos.
