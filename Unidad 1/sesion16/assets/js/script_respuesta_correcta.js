var preguntas = [
    "¿Cuál es la capital de Hungría?",
    "¿Cuál de las siguientes palabras es grave?"
];

var opciones = [
    ["Madrid", "Nairobi", "Zagreb", "Budapest", "Praga"],
    ["Pastel", "Termómetro", "Lápiz", "Opción", "Carátula"]
];

// Almacena índice de respuesta correcta
var respuestas = [3, 2];

/*
// Almacena arreglos en los que true indica que respuesta es correcta
var respuestas = [
    [false, false, false, true, false],
    [false, false, true, false, false]
]
*/

var puntaje = 0;
var i = 0;  // Representar la pregunta a desplegar

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];

    document.getElementById("barra-progreso").value = 100 * i / preguntas.length;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;

    if (i < preguntas.length) {
        if (indice === respuestas[i]) {
            puntaje++;
            document.querySelector(`#op${opcion}`).setAttribute("class", "right_answer");
        } else {
            document.querySelector(`#op${opcion}`).className = "wrong_answer";
        }
        sleep(4000);
        i++;  // Aumenta en 1 el valor de i

        if (i < preguntas.length) {
            siguientePregunta();
        } 
    } else {
        alert("Puntaje: " + puntaje);
    }
}

siguientePregunta();

document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});