
// OPERADORES MATEMÁTICOS
var a = 20;
var b = 5.5;
var c = 10;

"a + b = " + (a + b);
"a - c = " + (a - c);
"b * c = " + (b * c);
"a / b = " + (a / b);
"a % b = " + (a % b);
"a % c = " + (a % c);
"c**5 = " + (c**5);

// Operaciones combinadas
"a + b * c = " + (a + b * c);
"(a + b) * c = " + (a + b) * c;
/*
1º Paréntesis
2º Multiplicación y división (incluye potencias)
3º Suma y resta
*/


// OPERADORES DE COMPARACIÓN
8 == "8";
8 === "8";
8 != "8";
8 !== "8";

var edad = prompt("Edad: ");
edad >= 18;
edad < 18;


// OPERADORES LÓGICOS
"true && true = " + (true && true);
"true && false = " + (true && false);
"true && true && false = " + (true && true && false);
"false && false = " + (false && false);

"true || true = " + (true || true);
"true || false = " + (true || false);
"true || true || false = " + (true || true || false);
"false || false = " + (false || false); 

"true && (true || false) = " + (true && (true || false));  // TRUE
"false || (true && false) = " + (false || (true && false));  // FALSO


var paseMovilidad = true;
var pcrNegativo = false;
var aptoViajar = paseMovilidad || pcrNegativo;

var primeraDosis = true;
var segundaDosis = true;
var terceraDosis = false;
var paseMovilidad = primeraDosis && segundaDosis && terceraDosis;


var palabra = "Mariposa";
palabra.slice(0, 2);  // Ma
palabra.slice(2, 4);  // ri
palabra.slice(4, 6)  // po
palabra.slice(6)  // sa
palabra.slice(4)  // posa
palabra.slice(-1, 8)  // = palabra.slice(-1)
palabra.slice(-3, -1)  // os


