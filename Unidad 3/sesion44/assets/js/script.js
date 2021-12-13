// PILAS: último elemento en entrar es el primero en salir. Ej: una pila de libros
class Stack {
    // Definimos constructor, que se utilizará para crear instancias de esta clase
    constructor() {
        this.stack = [];
    }

    // Definimos sus métodos
    // Método para agregar elementos a la pila (stack)
    push(element) {
        this.stack.push(element);
        return this.stack;  // stack = stack.push(e);
    }

    // Método para quitar elementos a la pila (stack)
    pop() {
        return this.stack.pop();
    }

    // Método que retorna el último valor (elemento) agregado a la pila, sin sacarlo de esta.
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Método que retorna el número de elementos que contiene la pila.
    size() {
        return this.stack.length;
    }

    // Método que imprime en consola el contenido de la pila.
    print() {
        console.log(this.stack);
    }
}

const stack = new Stack();  // Creamos instancia de Stack
console.log(`stack.size() = ${stack.size()}`);  // 0
console.log(`stack.push('John Cena') = ${stack.push('John Cena')}`);  // ['John Cena']
console.log(`stack.push('The Rock') = ${stack.push('The Rock')}`);  // ['John Cena', 'The Rock']
console.log(`stack.size() = ${stack.size()}`);  // 2
stack.print();  // ['John Cena', 'The Rock']
console.log(`stack.peek() = ${stack.peek()}`);  // 'The Rock'
console.log(`stack.pop() = ${stack.pop()}`);  // 'The Rock'
console.log(`stack.peek() = ${stack.peek()}`);  // 'John Cena'
stack.print();  // ['John Cena']

// COLAS: El primer elemento en entrar es el primero en salir.
class Queue {
    // Definimos constructor, que se utilizará para crear instancias de esta clase
    constructor() {
        this.queue = [];
    }

    // Definimos sus métodos
    // Método para agregar elementos a la cola (queue).
    // Cada vez que llega un elemento, este se agrega al final de la cola.
    enqueue(element) {
        this.queue.push(element);
        return this.queue;  // queue = queue.push(e);
    }

    // Siempre que sale un elemento corresponde al primero de la cola.
    dequeue() {
        return this.queue.shift();
    }

    // Método para consultar el primer elemento de la cola, es decir, el próximo a salir.
    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    // Método valida si el largo de la cola es cero, es decir, si está vacía.
    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return console.log(this.queue);
    }
}

console.log("----------------------------------");
const queue = new Queue();
console.log(`queue.enqueue('John Cena') = ${queue.enqueue('John Cena')}`);  // ['John Cena']
console.log(`queue.enqueue('The Rock') = ${queue.enqueue('The Rock')}`);  // ['John Cena', 'The Rock']
console.log(`queue.enqueue('Stone Cold Steve Austin') = ${queue.enqueue('Stone Cold Steve Austin')}`);  // ['John Cena', 'The Rock', 'Stone Cold Steve Austin']
console.log(`queue.dequeue() = ${queue.dequeue()}`)  // 'John Cena'
console.log(`queue.peek() = ${queue.peek()}`)  // 'The Rock'
console.log(`queue.isEmpty() = ${queue.isEmpty()}`)  // false
queue.print();  // ['The Rock', 'Stone Cold Steve Austin']

// MATRICES
console.log("----------------------------------");
// col0: título
// col1: autor
// col2: año publicación
// col3: editorial
// cada fila (row) corresponderá a un libro distinto
let libros = [
    ["Juan Salvador Gaviota", "Richard Bach", 1970, "Macmillan Publishers"],
    ["Papelucho", "Marcela Paz", 1947, "Editorial Rapa Nui"],
    ["La Metamorfosis", "Franz Kafka", 1915, "Kurt Wolff Verlag"],
];

console.log(libros);
console.log(libros[0]);  // ['Juan Salvador Gaviota', 'Richard Bach', 1970, 'Macmillan Publishers']
console.log(libros.push(["La Metamorfosis", "Franz Kafka", 1915, "Kurt Wolff Verlag"]));  // 4
console.log(libros);
console.log(libros.pop());  // ["La Metamorfosis", "Franz Kafka", 1915, "Kurt Wolff Verlag"]
console.log(libros);

// Extra:
var titulo = 0;
var autor = 1;
var fechaPublicacion = 2;
var editorial = 3;
console.log(libros[0][autor]);  // Richard Bach

// ÁRBOLES
class TreeNode {
    constructor(node) {
        this.node = node;
        this.descendants = [];
    }
}

// Instancias de TreeNode
// Primera generación
const p1 = new TreeNode("P1");
const p2 = new TreeNode("P2");

// Segunda generación, hijos de P1 y P2
const f1_1 = new TreeNode("F1_1");
const f1_2 = new TreeNode("F1_2");
const f1_3 = new TreeNode("F1_3");
p1.descendants.push(f1_1, f1_2, f1_3);
p2.descendants.push(f1_1, f1_2, f1_3);

const f2_1 = new TreeNode("F2_1");
const f2_2 = new TreeNode("F2_2");
const f2_3 = new TreeNode("F2_3");
const f2_4 = new TreeNode("F2_4");
f1_2.descendants.push(f2_1, f2_2, f2_3);
f1_3.descendants.push(f2_4);

console.log("----------------------------------");
console.log(p1);

/*
                P1 x P2
                   |
            ---------------
            |      |      |
           F1_1  F1_2   F1_3
                   |      |
     ---------------      |
     |      |      |      |
     F2_1  F2_2  F2_3   F2_4
*/