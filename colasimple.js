const readline = require('readline');

class Cola {
    constructor(maxSize) {
        this.items = [];
        this.maxSize = maxSize; // Tamaño máximo de la cola
    }

    // CrearCola: Inicia la cola como vacía (ya se hace en el constructor)
    
    // Insertar: Añade un elemento por el final de la cola
    enqueue(element) {
        if (this.isFull()) {
            return "La cola está llena";
        }
        this.items.push(element);
    }

    // Quitar: Retira (extrae) el elemento frente de la cola
    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    // Cola vacía: Comprueba si la cola no tiene elementos
    isEmpty() {
        return this.items.length === 0;
    }

    // Cola llena: Comprueba si la cola está llena de elementos
    isFull() {
        return this.items.length >= this.maxSize;
    }

    // Frente: Obtiene el elemento frente o primero de la cola
    front() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    // Tamaño de la cola: Número de elementos máximo que puede contener la cola
    size() {
        return this.maxSize;
    }

    // Mostrar: Muestra los elementos de la cola
    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola con entrada desde la terminal
let miCola = new Cola(5); // Cola con un tamaño máximo de 5 elementos

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nOpciones:");
    console.log("1. Insertar elemento en la cola");
    console.log("2. Quitar elemento de la cola");
    console.log("3. Mostrar elementos de la cola");
    console.log("4. Mostrar el frente de la cola");
    console.log("5. Verificar si la cola está vacía");
    console.log("6. Verificar si la cola está llena");
    console.log("7. Mostrar el tamaño máximo de la cola");
    console.log("8. Salir");
    rl.question("Selecciona una opción: ", handleMenu);
}

function handleMenu(opcion) {
    switch (opcion) {
        case '1':
            rl.question("Ingresa el elemento a insertar: ", (elemento) => {
                console.log(miCola.enqueue(elemento));
                mostrarMenu();
            });
            break;
        case '2':
            console.log("Atendiendo:", miCola.dequeue());
            mostrarMenu();
            break;
        case '3':
            miCola.mostrar();
            mostrarMenu();
            break;
        case '4':
            console.log("Frente de la cola:", miCola.front());
            mostrarMenu();
            break;
        case '5':
            console.log("¿La cola está vacía?", miCola.isEmpty());
            mostrarMenu();
            break;
        case '6':
            console.log("¿La cola está llena?", miCola.isFull());
            mostrarMenu();
            break;
        case '7':
            console.log("Tamaño máximo de la cola:", miCola.size());
            mostrarMenu();
            break;
        case '8':
            rl.close();
            break;
        default:
            console.log("Opción no válida");
            mostrarMenu();
            break;
    }
}

mostrarMenu();