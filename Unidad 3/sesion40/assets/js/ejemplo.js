// Creamos un arreglo con nombres de marcas de vehículos
var cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Utilizamos un for para reccorrer el arreglo y mostrar las imágenes
function renderImgs() {
    var text = "";

    for (let i = 0; i < cars.length; i++) {
        text += `<img src="assets/img/${cars[i]}.png" width="100"></img>`;
    }

    // Agregamos text al HTML
    document.getElementById("demo").innerHTML = text;
}

// Programamos la funcionalidad de los botones
function btnPush() {
    let end = document.getElementById("end").value;
    cars.push(end); 
    renderImgs();
}
document.getElementById("btn-push").onclick = btnPush;

function btnPop() {
    cars.pop();
    renderImgs();
}
document.getElementById("btn-pop").onclick = btnPop;

function btnUnshift() {
    let begin = document.getElementById("begin").value;
    cars.unshift(begin); 
    renderImgs();
}
document.getElementById("btn-unshift").onclick = btnUnshift;

function btnShift() {
    cars.shift();
    renderImgs();
}
document.getElementById("btn-shift").onclick = btnShift;

function btnSlice() {
    let begin = parseInt(document.getElementById("begin").value);
    let end = parseInt(document.getElementById("end").value);
    cars = cars.slice(begin, end);
    renderImgs();
}
document.getElementById("btn-slice").onclick = btnSlice;


renderImgs();