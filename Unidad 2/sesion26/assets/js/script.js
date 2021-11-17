// Funciones
document.write("<h3>FUNCIÓN SIN PARÁMETROS NI RETORNO</h3>");
// Definición de la función
function saludo() {
    document.write("<p>Buenos días</p>");
}

// Ejecución de la función
saludo();
saludo();
saludo();
saludo("Buenas noches");  // Como la función no requiere información entregada como parámetros, "Buenas noches" no tiene efecto.

function secuenciaNumerica() {
    document.write("<p>");
    for (let i = 1; i <= 100; i++) {
        document.write(i + " ");
    }
    document.write("</p>");
}

secuenciaNumerica();

document.write("<h3>FUNCIÓN CON PARÁMETROS SIN RETORNO</h3>");

function promedio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    let promedio = suma / arr.length;
    document.write(`<p>El promedio de notas es ${promedio}</p>`);
}

var notas = [20, 16, 18, 14, 15];
promedio(notas);
promedio([10, 9, 11, 13, 15, 10, 20, 14, 16, 18]);

document.write("<h3>FUNCIÓN SIN PARÁMETROS CON RETORNO</h3>");
function numeroPi() {
    return 3.14159265;
}
var radio = 20;
var perimetro = 2 * 20 * numeroPi();
document.write(`<p>El valor del perímetro de una circunferencia con radio ${radio} es <strong>${perimetro}</strong></p>`);

document.write("<h3>FUNCIÓN CON PARÁMETROS Y RETORNO</h3>");
function subtotal(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

function total(arr, impuestos) {
    var suma = subtotal(arr);
    return (1 + impuestos / 100) * suma;
}

document.write(`<p>El total a pagar es $${total([1000, 2000, 500, 650], 19)}</p>`);

// Funciones flecha
document.write("<h3>FUNCIONES FLECHA</h3>");

// Función flecha con varias líneas de operaciones
var numerosAleatorios = cantidad => {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(Math.random());
    }
    return numeros;
}

var numerosGenerados = numerosAleatorios(5);
document.write("<ul>");
for (let i = 0; i < numerosGenerados.length; i++) {
    document.write(`<li>${numerosGenerados[i]}</li>`);
}
var numerosGenerados = numerosAleatorios(5);
document.write("</ul>");

// Función flecha de una línea
var suma = (a, b) => a + b;
document.write(`<p>La suma de a y b es ${suma(7, 30)}</p>`);