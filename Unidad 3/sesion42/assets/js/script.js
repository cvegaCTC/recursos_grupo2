const radios = [10, 24, 21, 63, 28];
document.write(`<p>radios = ${radios}</p>`);

// Map -> retorna un arreglo en el que se ha aplicado una función a cada uno de los elementos
document.write("<h2>Método map()</h2>");
var areas = radios.map(x => x * x * Math.PI);
var areasRedondeadas = areas.map(x => Math.round(100 * x) / 100);
document.write(`<p>areas = ${areas}</p>`);
document.write(`<p>areasRedondeadas = ${areasRedondeadas}</p>`);

const calificaciones = [18, 15, 11, 9, 13, 17];  // Escala de 0 a 20, se aprueba con 11
document.write("<h3>Calificaciones</h3>");
document.write(`<p>calificaciones = ${calificaciones}</p>`);
var rango = calificaciones.map(x => {
    if (x < 11) {return "C"}
    else if (x < 15) {return "B"}
    else {return "A"};
});
document.write(`<p>rango = ${rango}</p>`);

// Operador ternario
var aprueba = calificaciones.map(x => (x > 10) ? true : false);
document.write(`<p>aprueba = ${aprueba}</p>`);

// Reduce -> retorna un solo valor, obtenido luego de aplicar una función a todos los elementos del arreglo
document.write("<h2>Método reduce()</h2>");
var sumaAreas = areas.reduce((x, y) => x + y);
sumaAreas = Math.round(100 * sumaAreas) / 100;
document.write(`<p>sumaAreas = ${sumaAreas}</p>`);

const secuencia = [1, 2, 3, 4, 5, 6];
var factorial6 = secuencia.reduce((x, y) => x * y);
document.write(`<p>factorial6 = ${factorial6}</p>`);

function reductor(valorPrevio, valorActual) {
    return valorActual - valorPrevio;
}

var reduccionSecuencia = secuencia.reduce(reductor);
document.write(`<p>reduccionSecuencia = ${reduccionSecuencia}</p>`);
var reduccionSecuencia2 = secuencia.reduce(reductor, 10);  // valorInicial = 10, i.e., primero restará 10 - 1
document.write(`<p>reduccionSecuencia2 = ${reduccionSecuencia2}</p>`);

const arregloDeArreglos = [["c", "r", "a"], ["c", "k", " "], ["t", "h"], ["e", " "], ["c", "o", "d"], ["e"]];
document.write(`<p>arregloDeArreglos = ${arregloDeArreglos}</p>`);
document.write(`<p>arregloDeArreglos.length -> ${arregloDeArreglos.length}</p>`);  // tengo 6 arreglos como elementos del arreglo principal
var arregloConcatenado = arregloDeArreglos.reduce((x, y) => x.concat(y));
document.write(`<p>arregloConcatenado = ${arregloConcatenado}</p>`);  // ["c", "r", "a", "c", "k", " ", "t", "h", "e", " ", "c", "o", "d", "e"]
document.write(`<p>arregloConcatenado.length -> ${arregloConcatenado.length}</p>`); // tengo 14 strings como elementos del arreglo

// Sort
document.write("<h2>Método sort()</h2>");
var calificacionesOrdernadasDefault = calificaciones.sort();  // Ordena de menor a mayor según código ASCII (Unicode)
document.write(`<p>calificacionesOrdenadasDefault = ${calificacionesOrdernadasDefault}</p>`);

const arreglo = ["A", "a", 1, true, "Z", "%"];
// codigosASCII = [65, 97, 49, 116-114-117-101, 90, 37]
// arregloOrdenadoASCII = [%, 1, A, Z, a, true]
document.write(`<p>arreglo = ${arreglo}</p>`);
var arregloOrdenadoDefault = arreglo.sort();
document.write(`<p>arregloOrdenadoDefault = ${arregloOrdenadoDefault}</p>`);
document.write(`<p>arreglo = ${arreglo}</p>`);  // arreglo ahora contiene elementos ordenados, se recomienda trabajar con copias de los arreglos, así no se altera el original

document.write("<h3>Con función de comparación</h3>");
function ordenAscendente(a, b) {
    return a - b;
    // < 0 : a primero que b
    // == 0: se mantiene el orden
    // > 0 : b primero que a
}

const numeros = [100, 12, 21, 34, 75, -11, 0];
document.write(`<p>numeros = ${numeros}</p>`);
var numerosCopia = numeros;
var numerosOrdenAsc = numerosCopia.sort(ordenAscendente);
document.write(`<p>numerosOrdenAsc = ${numerosOrdenAsc}</p>`);

function ordenDescendente(a, b) {
    return b - a;
    // < 0 : b primero que a
    // == 0: se mantiene el orden
    // > 0 : a primero que b
}

var numerosOrdenDesc = numeros;
numerosOrdenDesc.sort(ordenDescendente);
document.write(`<p>numerosOrdenDesc = ${numerosOrdenDesc}</p>`);

const estudiantes = [
    {primerNombre: "Lwanna", segundoNombre: "Shanty", apellidoPaterno: "Correa", apellidoMaterno: "Bardales"},
    {primerNombre: "Gladys", segundoNombre: "Micaela", apellidoPaterno: "Cusipuma", apellidoMaterno: "Zuta"},
    {primerNombre: "Estrella", segundoNombre: "Alejandra", apellidoPaterno: "Llatas", apellidoMaterno: "Hernandez"},
    {primerNombre: "Verónica", segundoNombre: "Noemi", apellidoPaterno: "Carranza", apellidoMaterno: "Reyna"}
];

document.write("<h4>Estudiantes</h4>");
document.write("<ol>");
estudiantes.forEach(e => {
    document.write(`<li>${e.primerNombre} ${e.segundoNombre} ${e.apellidoPaterno} ${e.apellidoMaterno}</li>`);
});
document.write("</ol>");

var estudiantesAsc = estudiantes;
estudiantes.sort((a, b) => {
    if (a.apellidoPaterno > b.apellidoPaterno) {return 1}
    else if (a.apellidoPaterno < b.apellidoPaterno) {return -1}
    else {return 0}
});

document.write("<h4>Estudiantes ordenadas por apellido paterno (asc)</h4>");
document.write("<ol>");
estudiantesAsc.forEach(e => {
    document.write(`<li>${e.primerNombre} ${e.segundoNombre} ${e.apellidoPaterno} ${e.apellidoMaterno}</li>`);
});
document.write("</ol>");

var estudiantesDesc = estudiantesAsc;
estudiantesDesc.reverse();

document.write("<h4>Estudiantes ordenadas por apellido paterno (desc)</h4>");
document.write("<ol>");
estudiantesDesc.forEach(e => {
    document.write(`<li>${e.primerNombre} ${e.segundoNombre} ${e.apellidoPaterno} ${e.apellidoMaterno}</li>`);
});
document.write("</ol>");

// Split -> retorna arreglo a partir de un string
document.write("<h2>Método split()</h2>");
const lista = "manzana, zanahoria, lechuga, espinaca, kale, limón, pomelo";
document.write(`<p>lista = ${lista}</p>`);
var arrVegetales = lista.split(", ");
document.write(`<p>arrVegetales = ${arrVegetales}</p>`);

document.write("<h4>Lista de vegetales</h4>");
document.write("<ol>");
arrVegetales.forEach(e => document.write(`<li>${e}</li>`));
document.write("</ol>");

var arrVegetales2 = lista.split(", ", 4);

document.write("<h4>Lista de vegetales 2</h4>");
document.write("<ol>");
arrVegetales2.forEach(e => document.write(`<li>${e}</li>`));
document.write("</ol>");

// Join -> retorna string a partir de un arreglo
document.write("<h2>Método join()</h2>");
var lista2 = arrVegetales.join(" - ");  // separador por defecto -> ,
document.write(`<p>lista2 = ${lista2}</p>`);

var ctc = arregloConcatenado.join("");
document.write(`<p>ctc = ${ctc}</p>`);