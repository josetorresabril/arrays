
const aEx4 = [3, 7, 2];
const bEx4 = [10, 5];
const combinado = aEx4.concat(bEx4);
const sumaTotal = combinado.reduce((acum, n) => acum + n, 0);

console.log("Ejercicio 4 combinado:", combinado);
console.log("Ejercicio 4 suma:", sumaTotal);
