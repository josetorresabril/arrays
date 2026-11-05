const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const tresPrimeros = colores.slice(0, 3);
const coloresCombinados = tresPrimeros.concat(secundarios);

console.log("Ejercicio 15 tres primeros:", tresPrimeros);
console.log("Ejercicio 15 combinados:", coloresCombinados);
console.log("Ejercicio 15 original intacto:", colores);
