// DO WHILE
console.log("DO WHILE");
let i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

console.log("¿Qué pasa si no se cumple la condición?");
i = 6;
do {
    i++;
    console.log(i);
} while (i < 5);

// FUNCIÓN PROMPT
var edad = parseInt(prompt("Ingrese su edad: "));
console.log(typeof edad);
if (edad < 18) {
    alert("Lo sentimos, no puede ingresar.");
} else {
    alert("Bienvenide, disfrute de este evento.");
}

// DO-WHILE Y REGEX
console.log("Validación de expresiones regulares utilizando estructuras do-while.");
// const patron = /hola/;
// const patron = /^hola/;
const patron = /^hola$/;

var texto = "";
do {
    texto = prompt("Texto: ");
    console.log(patron.test(texto));
} while (!patron.test(texto));

console.log("Texto ingresado correctamente.");