const nombresEx11 = ["ana", "luis", "valentina", "sara", "sebastian"];
const enMayusculas = nombresEx11.map(n => n.toUpperCase());
const nombreLargo = enMayusculas.find(n => n.length > 6);

console.log("Ejercicio 11 Mayúsculas:", enMayusculas);
console.log("Ejercicio 11 Nombre largo:", nombreLargo);
