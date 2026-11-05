const precios = [120, 80, 250, 60, 90];
const sumaPrecios = precios.reduce((acum, p) => acum + p, 0);
const promedio = sumaPrecios / precios.length;

console.log("Ejercicio 14 promedio:", promedio);

let menoresAlPromedio = [];
if (promedio > 100) {
  menoresAlPromedio = precios.filter(p => p < promedio);
}
console.log("Ejercicio 14 filtrados:", menoresAlPromedio);
