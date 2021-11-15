console.log("------------- RETO 1 -------------");
/* 
¿Cómo hacemos para imprimir los números pares del 1 al 100?: 
Modificamos la condición para que el bucle corra mientras number sea <= 100. 
*/
/*
console.log(1);
console.log(2);
console.log(3);
...
console.log(100);
*/
// SOLUCIÓN 1
console.log("SOLUCIÓN 1");
let numero = 2;
while (numero <= 100) {
    console.log(numero);
    numero += 2;
}

// SOLUCIÓN 2
console.log("SOLUCIÓN 2");
let numero2 = 1;
while (numero2 <= 100) {
    if (numero2 % 2 == 0) {
        console.log(numero2);
    }
    numero2++;
}