var opcion = prompt("Escriba el número de el ejercicio a ejecutar");

if (opcion == "1") {
    var nombre = prompt("Escribe tu nombre");

    if (nombre.length > 7) {
        console.log(`Qué nombre tan largo tienes ${nombre}!`);
    }
}

if (opcion == "2") {
    var respuesta = prompt("5 * 8 (3 + 4) = ");
    if (respuesta == "280") {
        alert("Respuesta correcta!");
    }
}

if (opcion == "3") {
    // Es importante parsear (transformar) el dato entregado por el usuario a un número,
    // así podremos operar correctamente con este valor
    var edad = parseInt(prompt("Edad: "));
    var primariaCompleta = prompt("Completó la educación primaria? S/N");

    // Al transformar tanto el dato ingresado por el usuario como la respuesta esperada
    // a mayúscula, nos aseguramos de validar correctamente variaciones de lo recibido
    // ("s", "S")
    if ((edad >= 17) && (primariaCompleta.toUpperCase() == "S".toUpperCase())) {
        console.log("Puede sacar la licencia de conducir.");
    }
}

// IF...ELSE
if (opcion == "4") {
    // Es importante parsear (transformar) el dato entregado por el usuario a un número,
    // así podremos operar correctamente con este valor
    var edad = parseInt(prompt("Edad: "));
    var primariaCompleta = prompt("Completó la educación primaria? S/N");

    // Al transformar tanto el dato ingresado por el usuario como la respuesta esperada
    // a mayúscula, nos aseguramos de validar correctamente variaciones de lo recibido
    // ("s", "S")
    if ((edad >= 17) && (primariaCompleta.toUpperCase() == "S".toUpperCase())) {
        console.log("Puede sacar la licencia de conducir.");
    } else {
        console.log("Lo sentimos, no cumple con las condiciones requeridas.");
    }
}

// ELSE IF
// Ojo que el navegador leerá el script de arriba a abajo, por lo que
// si se cumple la primera condición no seguirá leyendo el código, 
// independiente de que se cumpla una o más de las condiciones siguientes.
if (opcion == "5") {
    var numero = parseInt(prompt("Ingrese un número: "));

    if (numero < 10) {
        alert("Diste un número pequeño.");
    } else if (numero < 100) {
        alert("Diste un número mediano.");
    } else {
        alert("Diste un número grande.");
    }
}

if (opcion == "6") {
    var numero = parseInt(prompt("Ingrese un número: "));

    if (numero < 100) {
        alert("Diste un número mediano.");
    } else if (numero < 10) {
        alert("Diste un número pequeño.");
    } else {
        alert("Diste un número grande.");
    }

    console.log("Esto está fuera de la estructura condicional");
}


// IF ANIDADOS
if (opcion == "7") {
    var sexoBiologico = prompt("Escriba si tiene estructuras reproductivas femeninas (F) o masculinas (M)");
    if (sexoBiologico.toUpperCase() == "F") {
        var ultimaMenstruacion = parseInt(prompt("Hace cuántos días fue su última menstruación?"));
        var dolorAbdominal = prompt("¿Siente dolor en la parte baja de su abdomen? S/N");
        if (dolorAbdominal.toUpperCase() == "S") {
            if(ultimaMenstruacion > 20) {
                console.log("Es probable que sus dolores se deban a síndrome premenstrual");
            } else {
                console.log("Consulte a su ginecólogo o matrona");
            }
        } else {
            if(ultimaMenstruacion > 20) {
                console.log("Es probable que su menstruación comience en los próximos días.");
            } else {
                console.log("Parece que todo está bien");
            }
        }
    } else {
        console.log("Cuestionario en construcción. Lo sentimos.");
    }
}