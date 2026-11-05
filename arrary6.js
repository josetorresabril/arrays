const nombresEx6 = ["Ana", "Luis", "Sara", "Pedro"];


const indiceSara = nombresEx6.indexOf("Sara");
if (indiceSara !== -1) {
  nombresEx6.splice(indiceSara, 1, "Camila");
}
console.log("Ejercicio 6 con splice:", nombresEx6);


const indiceJuan = nombresEx6.indexOf("Juan");
if (indiceJuan !== -1) {
  nombresEx6.splice(indiceJuan, 1, "Otro");
}
console.log("Ejercicio 6 con Juan (no existe, no cambia):", nombresEx6);