// Substrings: Fragmentos o partes de un string
var frase = "Me gustan las manzanas";
document.write(frase.charAt(7) + "<br>");
document.write(frase[3] + "<br>");
document.write(frase.slice(3, 9) + "<br>");
document.write(frase.slice(3) + "<br>");
document.write(frase.slice(-1) + "<br>");
document.write(frase.slice(-8, -1) + "<br>");
document.write(frase.slice(-8) + "<br>");
/*
document.write("<div><h1>Hola Chicas!</h1>");
document.write("Hola Mundo");
document.write("<h3>Cómo están?</h3></div>");
*/

// Comillas invertidas
// var nombre = prompt("Nombre: ");
var nombre = "Aceituna";
document.write(`<h2 style="color: green;">${nombre}, qué estás haciendo?</h2><br>`);
console.assert(`Hola ${nombre}` == "Hola Mundo");

// Caracteres especiales
document.write("<p>Hola\nMundo</p><br>");
console.log("Hola\nMundo");
console.log("Lista de libros:\n\t- Relato de mis putas tristes\n\t- Metamorfosis\n\t- Santa María de las Rosas Negras");
console.log('Uso de \'comillas simples\'');
console.log("Uso de 'comillas simples'");
console.log("\u53EF");

// Método length
document.write(`<p>La frase "${frase}" tiene ${frase.length} caracteres</p><br>`)
document.write('<p>La frase "' + frase + '" tiene ' + frase.length + ' caracteres</p><br>');

document.write(nombre[nombre.length - 1]);

// Mayúsculas y minúsculas
alert(nombre.toUpperCase());
alert("pARALElePiPedO".toLowerCase());
var palabra = "pARALElePiPedO";
alert(palabra[0].toUpperCase() + palabra.slice(1).toLowerCase());

console.log(frase.indexOf("manzanas"));

// Arrays (listas)
var nombres = ["Lwanna", "Verónica", "Sheyla", "Micaela", "Mel", "Lizet", "Jazmín", "Estrella",
"Mariaimee", "Arellys", "Cristhel"];

for (let i = 0; i < nombres.length; i++) {
    document.write("<h4>" + nombres[i] + "</h4>");
}