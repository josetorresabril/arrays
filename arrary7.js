const frutasEx7 = ["manzana", "kiwi", "pera", "uva"];
const frutasConA = frutasEx7.filter(f => f.includes("a"));
const stringFrutas = frutasConA.join(", ");

console.log("Ejercicio 7:", stringFrutas);