const numerosEx1 = [2, 5, 3, 8, 1];
const resultadoEx1 = numerosEx1.map(n => n * 3).filter(n => n > 10);

console.log("Ejercicio 1:", resultadoEx1); // [15, 24]
console.log("¿Cambió el array original?", numerosEx1); // Sigue siendo [2, 5, 3, 8, 1]

