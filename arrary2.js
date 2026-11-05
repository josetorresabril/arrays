const palabras = ["sol", "luna", "mar", "estrella"];

const palabrasInvertidas = [...palabras].reverse();
const palabraEncontrada = palabrasInvertidas.find(p => p.length > 3);

console.log("Ejercicio 2 invertido:", palabrasInvertidas);
console.log("Ejercicio 2 find:", palabraEncontrada);