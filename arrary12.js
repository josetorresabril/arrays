const edadesEx12 = [15, 32, 8, 21, 40];

const edadesOrdenadas = [...edadesEx12].sort((a, b) => b - a);
console.log("Ejercicio 12 ordenado:", edadesOrdenadas);


edadesOrdenadas.pop();
console.log("Ejercicio 12 sin la más joven:", edadesOrdenadas);


edadesOrdenadas.push(19);
console.log("Ejercicio 12 con la nueva:", edadesOrdenadas);
