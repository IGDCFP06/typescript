export type UUID = string;
export type PeriodoAcademico = "2026-1" | "2026-2";

export interface Estudiante {
  readonly id: UUID;
  nombreCompleto: string;
  emailInstitucional: string;
  creditosAprobados: number;
  fechaIngreso: Date;
}

export interface Asignatura {
  readonly id: UUID;
  codigo: string;
  nombre: string;
  creditos: number;
  docente: string;
}

export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
  estudianteId: UUID;
  periodo: PeriodoAcademico;
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: "DEUDA" | "SANCION" | "INACTIVIDAD";
  fechaSuspension: Date;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
  fechaCierre: Date;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

export function generarReporte(estado: EstadoMatricula): string {
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
      const estadoNoControlado: never = estado;
      throw new Error(`Estado no manejado: ${JSON.stringify(estadoNoControlado)}`);
    }
  }
}
