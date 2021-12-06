// Declaramos un arreglo
var arreglo = ["A", "B", "C"];
document.write(`<p>Arreglo original: ${arreglo}</p>`);

// PUSH: Agrega el elemento entregado como parámetro al final del arreglo
var longitud = arreglo.push("D");
document.write(`<p>Arreglo luego de push: ${arreglo}</p>`);
document.write(`<p>Longitud luego de push: ${longitud}</p>`);

// El método push puede recibir varios parámetros a la vez, y estos
// se agregarán de manera ordenada al final del arreglo
arreglo.push("E", "F", "G");
document.write(`<p>Push de varios elementos: ${arreglo}</p>`);

// POP: Elimina el último elemento de un arreglo
var eliminado = arreglo.pop();
document.write(`<p>Arreglo luego de pop: ${arreglo}</p>`);
document.write(`<p>Elemento eliminado: ${eliminado}</p>`);

// UNSHIFT: Agrega un elemento al inicio del arreglo, es decir, en
// la posición 0
longitud = arreglo.unshift("Z");
document.write(`<p>Arreglo luego de unshift: ${arreglo}</p>`);
document.write(`<p>Longitud luego de unshift: ${longitud}</p>`);

// SHIFT: Elimina el primer elemento de un arreglo
eliminado = arreglo.shift();
document.write(`<p>Arreglo luego de shift: ${arreglo}</p>`);
document.write(`<p>Elemento eliminado: ${eliminado}</p>`);

// SLICE: Crea un arreglo temporal desde el primer parámetro hasta el segundo (excluido)
var arregloTemporal = arreglo.slice(4, 6);
document.write(`<p>Arreglo temporal: ${arregloTemporal}</p>`);
arregloTemporal = arreglo.slice(4);  // Si solo entregamos un parámetro, se tomarán los elementos desde dicha posición hasta el final
document.write(`<p>Arreglo temporal: ${arregloTemporal}</p>`);
var arregloTemporal = arreglo.slice(-1);
document.write(`<p>Arreglo temporal: ${arregloTemporal}</p>`);

// SPLICE: Modifica el arreglo original
eliminado = arreglo.splice(1, 2);  // Desde la posición 1 se eliminan 2 elementos
document.write(`<p>Arreglo luego de splice: ${arreglo}</p>`);
document.write(`<p>Elementos eliminados: ${eliminado}</p>`);
eliminado = arreglo.splice(1, 0, "B", "C");  // Inserto B y C partiendo en el índice 1, sin eliminar elementos
document.write(`<p>Arreglo luego de splice: ${arreglo}</p>`);
document.write(`<p>Elementos eliminados: ${eliminado}</p>`);

// CONCAT: Concatena o une dos ó más arreglos
var arreglosConcatenados = arreglo.concat(["G", "H", "I", "J"]);
document.write(`<p>Arreglos concatenados: ${arreglosConcatenados}</p>`);
document.write(`<p>Arreglo luego de concat: ${arreglo}</p>`);
var arreglo2 = ["G", "H", "I"];
var arreglo3 = ["J", "K"];
arreglosConcatenados = arreglo.concat(arreglo2, arreglo3);
document.write(`<p>Arreglos concatenados: ${arreglosConcatenados}</p>`);