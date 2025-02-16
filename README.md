# Corrección y mejora de la implementación de una Cola en JavaScript

## Requisitos

Se requiere una implementación de una **cola** con las siguientes operaciones:

- **CrearCola**: Inicializa la cola como vacía.
- **Insertar (enqueue)**: Agrega un elemento a la cola.
- **Quitar (dequeue)**: Retira un elemento de la cola.
- **Cola vacía (isEmpty)**: Verifica si la cola está vacía.
- **Cola llena**: No aplica en este caso ya que estamos usando un array dinámico.
- **Frente (front)**: Devuelve el primer elemento de la cola sin retirarlo.
- **Tamaño de la cola (size)**: Devuelve la cantidad de elementos en la cola.

---

## Implementación de la Cola en JavaScript

```javascript
class Cola {
    constructor() {
        this.items = [];
    }

    // Agrega un elemento al final de la cola
    enqueue(element) {
        this.items.push(element);
    }

    // Remueve y devuelve el primer elemento de la cola
    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    // Devuelve el elemento al frente de la cola sin eliminarlo
    front() {
        return this.isEmpty() ? "La cola está vacía" : this.items[0];
    }

    // Verifica si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Devuelve el tamaño de la cola
    size() {
        return this.items.length;
    }

    // Muestra los elementos de la cola
    mostrar() {
        console.log(this.items);
    }
}


// Prueba de la cola
let miCola = new Cola();
miCola.enqueue("Cliente1");
miCola.enqueue("Cliente2");
miCola.enqueue("Cliente3");
miCola.mostrar();
console.log("Atendiendo:", miCola.dequeue());
console.log("Siguiente en la fila:", miCola.front());
console.log("Tamaño de la cola:", miCola.size());
```

--

## Mejoras aplicadas
1. **Corrección del nombre de la clase**: Ahora sigue la convención PascalCase (`Cola`).
2. **Método `size()` agregado**: Permite conocer la cantidad de elementos en la cola.
3. **Manejo de errores en `front()`**: Ahora verifica si la cola está vacía antes de intentar acceder al primer elemento.
4. **Mensajes de respuesta mejorados**: Devuelven información más clara cuando la cola está vacía.
5. **Mayor legibilidad**: Se aplicó una mejor estructura de código y formato.

---

Con esta implementación, la cola tiene todas las funcionalidades necesarias y un comportamiento más robusto. 🚀
