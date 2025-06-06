// Nodo de la lista
function createNode(value) {
  return {
    value: value,
    next: null,
    prev: null
  };
}

// Lista doblemente enlazada
function insertAt(head, value) {
  const newNode = createNode(value);
  if (!head) return newNode;

  let current = head;
  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  newNode.prev = current;
  return head;
}

function reverseList(startNode) {
  if (!startNode || (!startNode.next && !startNode.prev)) {
    return startNode;
  }

  let current = startNode;
  let prev = null;

  while (current) {
    // Intercambiar prev y next
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;

    prev = current;
    current = temp;
  }

  return prev; // Nuevo inicio de la lista
}

// 🧪 Prueba
let head = null;
head = insertAt(head, "Nodo1");

// Lista con un solo nodo (debe quedar igual después de reverse)
let reversed = reverseList(head);

console.log("Valor original:", head.value);
console.log("Valor después de reverse:", reversed.value);
