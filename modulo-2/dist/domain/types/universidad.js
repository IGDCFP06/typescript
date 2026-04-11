export function generarReporte(estado) {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matricula ACTIVA en ${estado.periodo} con ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `Matricula SUSPENDIDA por ${estado.motivo} desde ${estado.fechaSuspension.toISOString().slice(0, 10)}.`;
        case "FINALIZADA":
            return `Matricula FINALIZADA con nota media ${estado.notaMedia.toFixed(2)} (cierre: ${estado.fechaCierre
                .toISOString()
                .slice(0, 10)}).`;
        default: {
            const estadoNoControlado = estado;
            throw new Error(`Estado no manejado: ${JSON.stringify(estadoNoControlado)}`);
        }
    }
}
