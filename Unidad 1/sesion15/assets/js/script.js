function animalElegido() {
    var animal = document.getElementById("animal").value;
    
    var respuesta = "";
    switch (animal) {
        case "perro":
            respuesta = "El perro es el mejor amigo del hombre.";
            break;
        case "gato":
            respuesta = "¿Sabías que los gatos eran un animal sagrado para los egipcios?";
            break;
        case "hamster":
            respuesta = "Cuida muy bien los dientes de tu roedor, estos nunca dejan de crecer.";
            break;
        case "conejo":
            respuesta = "A pesar de ser aparentemente animales muy pacíficos, son extremadamente protectores y siempre dispuestos a luchar por su familia.";
            break;
        case "cuy":
            respuesta = "Estos hermosos animales tienen sus propios concursos de belleza.";
            break;
        case "peces":
            respuesta = "Infórmate bien sobre el hábitat natural de tus pececitos, cada especie necesita salinidades y temperaturas distintas.";
            break;
        case "canario":
            respuesta = "Estas pequeñas aves pueden ser tu mejor compañero.";
            break;
        default:
            respuesta = "Todos los animales merecen los mismos cuidados y dedicación, independiente de su especie, no olvides llevar a tu compañere a sus chequeos veterinarios y mantener en óptimas condiciones su ambiente.";
            break;
    }

    // OPCIÓN 1 (Letras verdes)
    document.getElementById("respuesta").innerHTML = respuesta;
    document.getElementById("respuesta").style.color = "green";

    // OPCIÓN 2 (Letras rojas)
    var body = document.querySelector("body");

    // Utilizamos un if para eliminar cualquier respuesta en rojo presente si ya se había presionado el botón anteriormente
    if (document.getElementById("respuesta2")) {
        document.getElementById("respuesta2").remove();
    }
    var parrafo = document.createElement("p");
    parrafo.innerText = respuesta;
    parrafo.style.color = "red";
    parrafo.id = "respuesta2";
    body.insertBefore(parrafo, body.lastElementChild);
}