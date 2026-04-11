import { generarReporte } from "./domain/types/universidad.js";
import { ApiClient } from "./services/api-client.js";
async function main() {
    const apiClient = new ApiClient(150);
    const estudiantes = await apiClient.obtenerRecurso("/estudiantes");
    if (estudiantes.exito) {
        console.log("Estudiantes cargados:", estudiantes.datos.length);
    }
    else {
        console.error("Fallo al cargar estudiantes:", estudiantes.errores);
    }
    const estado = await apiClient.obtenerRecurso("/matricula/finalizada");
    if (estado.exito) {
        console.log(generarReporte(estado.datos));
    }
    else {
        console.error("No se pudo obtener estado de matricula:", estado.errores);
    }
}
main().catch((error) => {
    console.error("Error no controlado:", error);
});
