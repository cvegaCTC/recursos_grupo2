// Bucles de tipo for (finito)
// Debemos declarar una variable, su valor inicial, la condición de fin y su actualizador
// Generalmente se utiliza una variable llamada "i", la cual suele tener como valor inicial 0
// "i" va a cambiar de valor en cada iteración según la expresión de actualización
// --------- EJEMPLO 1 --------- //
for (let i = 0; i < 10; i++) {
    document.write(`<p>${i}</p>`);
}

// --------- EJEMPLO 2 --------- //
let acumulador = 0;
for (let j = 1; j <= 100; j++) {
    acumulador += j;
}
document.write(`<p>acumulador = ${acumulador}</p>`);
// j = 1
// acumulador = 0 + 1 = 1

// j = 2
// acumulador = 1 + 2 = 3

// j = 3
// acumulador = 3 + 3 = 6

// j = 4
// acumulador = 6 + 4 = 10

// j = 5
// acumulador = 10 + 5 = 15

// --------- EJEMPLO 3 --------- //
document.write("<h3>Cuenta regresiva</h3>");
for (let k = 100; k >= 0; k--) {
    document.write(`<p>${k}</p>`);
}

// --------- EJEMPLO 4 --------- //
var lista = ["Lizzo", "Justin Bieber", "Ariana Grande", "Dua Lipa", "Ed Sheeran", "C. Tangana", "Princesa Alba", "Nicki Nicole", "Bad Bunny"];
document.write("<h3>Cantantes</h3>");
document.write("<ol>");
// for (let l = 0; l <= lista.length - 1; l++){
for (let l = 0; l < lista.length; l++){
    document.write(`<li>${lista[l]}</li>`);
}
document.write("</ol>");

// ----------------------------------------- //
// -------------- EJERCICIOS --------------- //
// ----------------------------------------- //
// 1.
for (let m = 0; m < 20; m += 2) {
    document.write(`<p>${m}</p>`);
}




// 2.
for (let n = 1; n < 100; n *=2) {
    document.write(`<p>${n}</p>`);
}




// 3.
var numeros = [2, 4, 6, 8, 10, 12];
for (let o = 0; o < numeros.length; o++) {
    document.write(`<p>${numeros[o] * o}</p>`);
}





// Escriban sus propios bucles:
// 4. Impriman todos los números pares entre 5 y 150



// 5. Impriman los elementos del siguiente arreglo desde el
// último al primero
var paises = ["Perú", "Chile", "Argentina", "Venezuela", "Bolivia", "Panamá"];



// 6. Obtengan la suma de cada par de elementos con mismo índice, por ejemplo:
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var suma = [5, 7, 9];




// BONUS: Obtengan la suma de todos los elementos de 3 arreglos. Por ejemplo:
// var arr3 = [1, 2, 3];
// var arr4 = [4, 5, 6];
// var arr5 = [10, 20, 30, 40, 50, 60];
// var total = 231;