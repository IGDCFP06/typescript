import { esRespuestaAPI } from "../domain/types/api.js";
const estudiantesMock = [
    {
        id: "est-001",
        nombreCompleto: "Nora Salvatierra",
        emailInstitucional: "nora.salvatierra@universidad.edu",
        creditosAprobados: 124,
        fechaIngreso: new Date("2023-09-11")
    },
    {
        id: "est-002",
        nombreCompleto: "Sergio Roldan",
        emailInstitucional: "sergio.roldan@universidad.edu",
        creditosAprobados: 88,
        fechaIngreso: new Date("2024-02-19")
    }
];
const asignaturasMock = [
    {
        id: "asig-001",
        codigo: "TS401",
        nombre: "Arquitectura de Software Tipada",
        creditos: 6,
        docente: "Dra. Lucia Vela"
    },
    {
        id: "asig-002",
        codigo: "RE302",
        nombre: "Interfaces Reactivas",
        creditos: 4,
        docente: "Dr. Marcos Riera"
    }
];
const estadoMatriculaMock = {
    "/matricula/activa": {
        tipo: "ACTIVA",
        periodo: "2026-1",
        estudianteId: "est-001",
        asignaturas: asignaturasMock
    },
    "/matricula/suspendida": {
        tipo: "SUSPENDIDA",
        motivo: "DEUDA",
        fechaSuspension: new Date("2026-02-15")
    },
    "/matricula/finalizada": {
        tipo: "FINALIZADA",
        notaMedia: 8.7,
        fechaCierre: new Date("2026-06-30")
    }
};
const mockDb = {
    "/estudiantes": estudiantesMock,
    "/asignaturas": asignaturasMock,
    ...estadoMatriculaMock
};
export class ApiClient {
    latenciaMs;
    constructor(latenciaMs = 250) {
        this.latenciaMs = latenciaMs;
    }
    async obtenerRecurso(endpoint) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const recurso = mockDb[endpoint];
                const baseTimestamp = new Date().toISOString();
                const respuestaCandidata = recurso === undefined
                    ? {
                        codigoEstado: 404,
                        exito: false,
                        datos: null,
                        errores: [`No existe recurso para endpoint "${endpoint}".`],
                        timestamp: baseTimestamp
                    }
                    : {
                        codigoEstado: 200,
                        exito: true,
                        datos: recurso,
                        timestamp: baseTimestamp
                    };
                if (!esRespuestaAPI(respuestaCandidata)) {
                    throw new Error("La respuesta no cumple el contrato RespuestaAPI<T>.");
                }
                resolve(respuestaCandidata);
            }, this.latenciaMs);
        });
    }
}
