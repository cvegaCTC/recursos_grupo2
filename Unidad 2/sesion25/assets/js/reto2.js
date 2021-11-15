console.log("------------- RETO 2 -------------");
/*
¿Cómo hacemos para imprimir los números impares del 1 al 12?: 
Inicializamos el valor de number con el valor de 1 (en lugar de 0)
*/
// SOLUCIÓN 1
console.log("SOLUCIÓN 1");
let numero3 = 1;
while (numero3 <= 12) {
    console.log(numero3);
    numero3 += 2;
}

// SOLUCIÓN 2
console.log("SOLUCIÓN 2");
let numero4 = 1;
while (numero4 <= 12) {
    if (numero4 % 2 != 0) {
        console.log(numero4);
    }
    numero4++;
}