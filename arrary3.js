const personasEx3 = [
  { nombre: "Sara", edad: 31 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 15 },
];
const hayMenores = personasEx3.some(p => p.edad < 18);

const personasOrdenadas = [...personasEx3].sort((a, b) => a.edad - b.edad);
const personaJovenMayorDeEdad = personasOrdenadas.find(p => p.edad >= 18);

console.log("Ejercicio 3 some:", hayMenores);
console.log("Ejercicio 3 ordenado:", personasOrdenadas);
console.log("Ejercicio 3 find:", personaJovenMayorDeEdad);
