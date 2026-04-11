function calcularDesviacionEstandar(datos, media) {
    if (datos.length < 2) {
        return 0;
    }
    const sumaCuadrados = datos.reduce((acumulado, valor) => {
        const distancia = valor - media;
        return acumulado + distancia * distancia;
    }, 0);
    return Math.sqrt(sumaCuadrados / datos.length);
}
export function calcularMedia(datos) {
    if (datos.length === 0) {
        return null;
    }
    const total = datos.reduce((acumulado, valor) => acumulado + valor, 0);
    return total / datos.length;
}
export function calcularMediana(datos) {
    if (datos.length === 0) {
        return null;
    }
    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}
export function filtrarAtipicos(datos, limite) {
    if (limite < 0) {
        throw new RangeError("El limite no puede ser negativo.");
    }
    const media = calcularMedia(datos);
    if (media === null) {
        return [];
    }
    const desviacion = calcularDesviacionEstandar(datos, media);
    if (desviacion === 0) {
        return [];
    }
    return datos.filter((valor) => {
        const zScore = Math.abs((valor - media) / desviacion);
        return zScore > limite;
    });
}
