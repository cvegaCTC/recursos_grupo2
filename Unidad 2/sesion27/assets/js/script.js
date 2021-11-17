function area(radio) {
    return Math.PI * radio * radio;
}

function perimetro(radio) {
    return 2 * Math.PI * radio;
}

var boton1 = document.getElementById("boton-enviar");
boton1.addEventListener("click", function() {
    document.getElementById("error-circunferencia").innerText = "";
    let radio = document.getElementById("radio").value;
    if (parseFloat(radio)) {
        radio = parseFloat(radio);
        let areaCircunferencia = Math.round(area(radio) * 100) / 100;
        let perimetroCircunferencia = Math.round(perimetro(radio) * 100) / 100;

        document.getElementById("resultado-radio").innerText = radio;
        document.getElementById("resultado-perimetro").innerText = perimetroCircunferencia;
        document.getElementById("resultado-area").innerText = areaCircunferencia;
    } else {
        document.getElementById("error-circunferencia").innerText = "Ingrese un número";
    }
});

function calculadoraIMC(peso, altura) {
    return peso / (altura * altura);
}

var boton2 = document.getElementById("boton-imc");
boton2.addEventListener("click", function() {
    document.getElementById("error-imc").innerText = "";
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;
    if (parseFloat(peso) || parseFloat(estatura)) {
        peso = parseFloat(peso);
        estatura = parseFloat(estatura);
        if (estatura < 3) {
            let imc = Math.round(calculadoraIMC(peso, estatura) * 100) / 100;
            
            document.getElementById("resultado-peso").innerText = peso;
            document.getElementById("resultado-estatura").innerText = estatura;
            document.getElementById("resultado-imc").innerText = imc;
        } else {
            document.getElementById("error-imc").innerText = "La estatura debe estar en metros.";
        }
    } else {
        document.getElementById("error-imc").innerText = "Los valores de peso y estatura deben ser numéricos.";
    }
});