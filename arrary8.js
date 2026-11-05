const aEx8 = [4, 9, 2, 7];
const bEx8 = [4, -1, 2];

const mayorA = aEx8.reduce((max, n) => (n > max ? n : max), aEx8[0]);
const everyA = aEx8.every(n => n > 0);

const mayorB = bEx8.reduce((max, n) => (n > max ? n : max), bEx8[0]);
const everyB = bEx8.every(n => n > 0);

console.log(`Ejercicio 8 a: mayor ${mayorA}, every: ${everyA}`);
console.log(`Ejercicio 8 b: mayor ${mayorB}, every: ${everyB}`);