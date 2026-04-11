export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
  timestamp: string;
}

export function esRespuestaAPI(value: unknown): value is RespuestaAPI<unknown> {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidato = value as Partial<RespuestaAPI<unknown>>;

  return (
    typeof candidato.codigoEstado === "number" &&
    typeof candidato.exito === "boolean" &&
    "datos" in candidato &&
    typeof candidato.timestamp === "string"
  );
}
