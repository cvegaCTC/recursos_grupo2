// Arreglos bidimensionales

const trivia = [
    ["¿Cómo se llamaba el primer hombre en orbitar la Tierra?", "Yuri Gagarin"],
    ["¿Por qué los humanos somos clasificados como deuterostomados?", "Porque en el desarrollo embrionario se genera primero el ano y luego la boca"],
    ["¿Qué cultura descubrió primero el territorio de Canadá?", "Euskera"],
    ["¿Cuál es el material conocido más resistente?", "El grafteno"]
];

for (let i = 0; i < trivia.length; i++) {
    setTimeout(function () {
        document.write(`<h4>${trivia[i][0]}</h4>`);  // pregunta
    }, i * 3000);
    
    setTimeout(function () {
        document.write(`<p>${trivia[i][1]}</p>`);
    }, i * 3000 + 2000);
}