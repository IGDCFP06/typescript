export function esRespuestaAPI(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidato = value;
    return (typeof candidato.codigoEstado === "number" &&
        typeof candidato.exito === "boolean" &&
        "datos" in candidato &&
        typeof candidato.timestamp === "string");
}
