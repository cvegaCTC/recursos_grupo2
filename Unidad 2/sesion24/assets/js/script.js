// Ejemplo 1
// document.getElementById("capital").innerHTML = "Zagreb";
var capitales = ["Lima", "Santiago", "Buenos Aires", "Asunción", "Bogotá", "Caracas", "Sucre", "Madrid", "Londres", "París", "Roma", "Berlín", "Ámsterdam", "Budapest", "Lisboa", "Zagreb", "Praga", "Ánkara", "Damasco", "Beirut", "Tokio"];

var i = 0;
function siguienteCapital() {
    document.getElementById("capital").innerHTML = capitales[i];
    i++;
}

document.getElementById("siguiente").addEventListener("click", function () {
    if (i < capitales.length) {
        siguienteCapital();
    }
});

// Ejemplo 2
var colores = ["yellow", "green", "blue", "red", "orange", "pink", "cyan", "brown", "purple", "grey"];

var ej2 = document.getElementById("ej2");

var time = 0;
// i++ equivalente a i = i + 1 equivalente a i += 1
var n = 0;
while (n < 1000) {
    for (let i = 0; i < colores.length; i++) {
        setTimeout(function(){
            ej2.style.backgroundColor = colores[i];
        }, time);
        time += 500;
    }
    n++;
}

// Ejemplo 3
var ej3 = document.getElementById("ej3");
var time2 = 0;
// i++ equivalente a i = i + 1 equivalente a i += 1
var m = 0;
while (m < 1000) {
    for (let i = colores.length - 1; i >= 0; i--) {
        setTimeout(function(){
            ej3.style.color = colores[i];
        }, time2);
        time2 += 500;
    }
    m++;
}