$("body").css("background-color", "pink");

// Con JS Vanilla
let btnOcultarJS = document.getElementById("btnOcultar");
let btnMostrarJS = document.getElementById("btnMostrar");

btnOcultarJS.onclick = ocultarTexto;
btnMostrarJS.onclick = mostrarTexto;

function ocultarTexto() {
    document.getElementById("parrafo").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("parrafo").style.display = "block";
}

// Con jQuery
$(document).ready(function() {
    $("#btnOcultar2").click(function() {
        $("#parrafo").hide("slow");
    })

    $("#btnMostrar2").click(function() {
        $("#parrafo").show("slow");
    })
});