// linkedList.js

// Nodo simple
function createNode(value) {
  return {
    value: value,
    next: null
  };
}

// Lista enlazada simple
function LinkedList() {
  let head = null;

  function addNode(value) {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  function deleteNode(value) {
    if (!head) {
      console.log("La lista está vacía, no se puede eliminar.");
      return;
    }

    // Si el nodo a eliminar es la cabeza
    if (head.value === value) {
      head = head.next;
      console.log(`Nodo con valor ${value} eliminado.`);
      return;
    }

    let current = head;
    let prev = null;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      console.log(`Nodo con valor ${value} no encontrado.`);
      return;
    }

    prev.next = current.next;
    console.log(`Nodo con valor ${value} eliminado.`);
  }

  function printList() {
    if (!head) {
      console.log("La lista está vacía.");
      return;
    }
    let current = head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Lista:", values.join(" -> "));
  }

  return {
    addNode,
    deleteNode,
    printList
  };
}

// Uso de la lista
const list = LinkedList();

console.log("Intentando eliminar nodo en lista vacía:");
list.deleteNode(10);

list.addNode(5);
list.addNode(10);
list.addNode(15);

list.printList();

list.deleteNode(10);
list.printList();

list.deleteNode(20); // Nodo no existente
