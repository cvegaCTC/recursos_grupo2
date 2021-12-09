const objetos = ["Cama", "Sofá", "Televisor", "Lámpara", "Vaso", "Sofá"];

// indexOf
var sofa = objetos.indexOf("Sofá");
console.log(sofa);  // 1

var sofa2 = objetos.indexOf("Sofá", 2);
console.log(sofa2);  // 5

var microondas = objetos.indexOf("Microondas");
console.log(microondas);  // -1

// lastIndexOf
sofa2 = objetos.lastIndexOf("Sofá");
console.log(sofa2);  // 5

sofa = objetos.lastIndexOf("Sofá", 4);
console.log(sofa);  // 1

// includes
var haySofas = objetos.includes("Sofá");
console.log(haySofas);  // true

var hayTeles = objetos.includes("Televisor", -1);
console.log(hayTeles);  // false, parte desde 6 - 1: índice 5

hayTeles = objetos.includes("Televisor", -4);
console.log(hayTeles);  // true, parte desde 6 - 4: índice 2

// find
// Buscar primer elemento con más de 5 caracteres dentro de objetos
console.log(objetos.find(x => x.length > 5));  // Televisor

// findIndex
const nombres = ["Pamela", "Carlos", "Hernán", "Matilde", "Fernanda", "Sofía"];
const promedios = [10, 15, 14, 19, 16, 20];
// Imprimir el nombre de un estudiante con promedio mayor a 18
var indice = promedios.findIndex(x => x > 18);  // 3
console.log(nombres[indice]);  // Matilde

// filter
// Imprimir el nombre y el respectivo promedio de los estudiantes con promedio menor a 16
var promediosBajo16 = promedios.filter(x => x < 16);  // [10, 15, 14]

var index = -1;
for (let i = 0; i < promediosBajo16.length; i++) {
    index = promedios.findIndex(x => x === promediosBajo16[i]);
    console.log(nombres[index] + " ---- " + promedios[index]);
}