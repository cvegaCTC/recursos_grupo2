const animales = ["Vaquita marina", "Tardígrado", "Morena", "León", "Kiwi", "Monito del monte", "Yaca", "Alce", "Güiña", "Colo-colo", "Ranita de Darwin", "Castor", "Visón", "Coipo", "Lince"];

do {
    var orden = prompt("1. Orden normal\n2. Orden inverso\n3. Orden normal con for avanzado (for each)");

    if (orden === "1") {

        // Animales desde el primero al último
        document.write("<h3>Animales</h3>");
        document.write("<ul>");

        for (let i = 0; i < animales.length; i++) {
            document.write("<li>");
            document.write(animales[i]);
            document.write("</li>");
        }

        document.write("</ul>");
    } else if (orden === "2") {

        // Animales desde el último al primero
        // Utilizando índices >= 0
        document.write("<h3>Animales (alverre)</h3>");
        document.write("<ul>");

        for (let j = animales.length - 1; j >= 0; j--) {
            document.write(`<li>${animales[j]}</li>`);
        }

        document.write("</ul>");
    } else if (orden === "3") {
        document.write("<h3>Animales (for avanzado)</h3>");
        document.write("<ul>");
        for (let especie of animales) {
            document.write(`<li>${especie}</li>`);
        }
        document.write("</ul>");
    } else {
        alert("Opción inválida, intente nuevamente.");
    }
} while (orden !== "1" && orden !== "2" && orden !== "3");