// CREACIÓN DE OBJETOS
// Forma 1
var Auto = {};
// Forma 2
Auto = new Object();

// DECLARACIÓN DE ATRIBUTOS (2 formas)
Auto.marca = "Kia";
Auto["modelo"] = "Carens";
Auto.anio = 2018;
Auto.color = "Blanco Perla";
Auto["placa"] = "DSHQ18";
Auto.puertas = 5;
Auto["cilindrada"] = 1.4;

// ACCESO A ATRIBUTOS (2 formas)
document.write(`<p>${Auto.marca} ${Auto.modelo} ${Auto.cilindrada} ${Auto.anio}</p>`);
document.write(`<p>${Auto["color"]}</p>`);
document.write(`<p>${Auto["puertas"]} puertas</p>`);
document.write(`<p>${Auto["placa"]}</p>`);

// MUTACIÓN DE ATRIBUTOS
Auto.modelo = "Rio 5";
Auto["anio"] = 2020;
document.write(`<p>${Auto.marca} ${Auto.modelo} ${Auto.cilindrada} ${Auto.anio}</p>`);
document.write(`<p>${Auto["color"]}</p>`);
document.write(`<p>${Auto["puertas"]} puertas</p>`);
document.write(`<p>${Auto["placa"]}</p>`);