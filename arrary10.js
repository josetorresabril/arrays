const aEx10 = [4, 10, 7, 12];
const bEx10 = [4, 9];

const resMapA = aEx10.map(n => n / 2);
const tiene5A = resMapA.includes(5);

const resMapB = bEx10.map(n => n / 2);
const tiene5B = resMapB.includes(5);

console.log(`Ejercicio 10 a: [${resMapA}] -> ${tiene5A}`);
console.log(`Ejercicio 10 b: [${resMapB}] -> ${tiene5B}`);