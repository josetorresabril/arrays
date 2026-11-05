const productosEx9 = [
  { nombre: "Lápiz", precio: 50 },
  { nombre: "Cuaderno", precio: 120 },
  { nombre: "Libro", precio: 200 }
];

const indicePrecio = productosEx9.findIndex(p => p.precio > 100);
const indiceNadie = productosEx9.findIndex(p => p.precio > 1000);

console.log("Ejercicio 9 (índice > 100):", indicePrecio);
console.log("Ejercicio 9 (ninguno cumple):", indiceNadie);
