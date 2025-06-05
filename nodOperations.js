// nodOperations.js

// Crea un nodo simple con un valor y un puntero al siguiente nodo
function crearNodo(valor) {
    return {
        valor: valor,
        siguiente: null
    };
}

function crearListaDesdeArreglo(arreglo) {
    if (arreglo.length === 0) return null;

    let cabeza = crearNodo(arreglo[0]);
    let actual = cabeza;

    for (let i = 1; i < arreglo.length; i++) {
        actual.siguiente = crearNodo(arreglo[i]);
        actual = actual.siguiente;
    }

    return cabeza;
}

function imprimirLista(nodo) {
    while (nodo !== null) {
        console.log(nodo.valor);
        nodo = nodo.siguiente;
    }
}

function contarNodos(nodo) {
    if (nodo === null) return 0;
    return 1 + contarNodos(nodo.siguiente);
}

// Prueba con lista de valores
const valores = [10, 20, 30, 40, 50];
const lista = crearListaDesdeArreglo(valores);

console.log("📋 Lista enlazada:");
imprimirLista(lista);

console.time("⏱ Tiempo de conteo");
const totalNodos = contarNodos(lista);
console.timeEnd("⏱ Tiempo de conteo");

console.log("Total de nodos:", totalNodos);

// Prueba con lista vacía
const listaVacia = crearListaDesdeArreglo([]);

console.time("⏱ Tiempo de conteo en lista vacía");
const totalVacios = contarNodos(listaVacia);
console.timeEnd("⏱ Tiempo de conteo en lista vacía");

console.log("Total de nodos en lista vacía:", totalVacios);
