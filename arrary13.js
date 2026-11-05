const aEx13 = [4, 7, 10, 3, 8];
const bEx13 = [4, -2, 10];

const todosPositivosA = aEx13.every(n => n > 0);
const paresA = aEx13.filter(n => n % 2 === 0);

const todosPositivosB = bEx13.every(n => n > 0);
const paresB = bEx13.filter(n => n % 2 === 0);

console.log(`Ejercicio 13 a: ${todosPositivosA}, pares [${paresA}]`);
console.log(`Ejercicio 13 b: ${todosPositivosB}, pares [${paresB}]`);
