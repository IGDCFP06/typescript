import { RespuestaAPI } from "./domain/types/api.js";
import { Estudiante, EstadoMatricula, generarReporte } from "./domain/types/universidad.js";
import { ApiClient } from "./services/api-client.js";

async function main(): Promise<void> {
  const apiClient = new ApiClient(150);

  const estudiantes: RespuestaAPI<Estudiante[]> = await apiClient.obtenerRecurso<Estudiante[]>("/estudiantes");
  if (estudiantes.exito) {
    console.log("Estudiantes cargados:", estudiantes.datos.length);
  } else {
    console.error("Fallo al cargar estudiantes:", estudiantes.errores);
  }

  const estado = await apiClient.obtenerRecurso<EstadoMatricula>("/matricula/finalizada");
  if (estado.exito) {
    console.log(generarReporte(estado.datos));
  } else {
    console.error("No se pudo obtener estado de matricula:", estado.errores);
  }
}

main().catch((error: unknown) => {
  console.error("Error no controlado:", error);
});
