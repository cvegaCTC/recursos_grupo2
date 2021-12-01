// Crearemos arreglo con números pares del 0 al 1000
// PASO 1: Declarar e inicializar el arreglo (vacío)
var numerosPares = [];

// PASO 2: Creamos una variable auxiliar que indicará el índice en que se almacenará cada número par.
// Solo aumenta su valor (en 1) luego de agregar un par a numerosPares.
var contador = 0;

// PASO 3: Avanzamos de 0 a 1000
for (let i = 0; i <= 1000; i++) {
    // PASO 4: Validamos que el valor de i sea par.
    if (i % 2 == 0) {
        // PASO 5: Agregamos i luego del último elemento de numerosPares.
        numerosPares[contador] = i;
        // PASO 6: Como ya se utilizó la posición dada por contador, le sumamos 1 para que indique
        // la próxima posición a ser utilizada.
        contador++;
    }
}

console.log(numerosPares);