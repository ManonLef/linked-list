import Node from "./node";

export default class LinkedList {
  constructor(head = null) {
    this.listHead = head;
  }

  append(value) {
    let node = this.listHead;

    // when no items in list, new node will be the head
    if (node === null) {
      this.listHead = new Node(value);
    } else {
      // iterate to end of the list and insert there.
      while (node.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = new Node(value);
    }
  }

  prepend(value) {
    const currentHead = this.listHead;

    const newHead = new Node(value);
    newHead.nextNode = currentHead;

    this.listHead = newHead;
  }

  size() {
    let node = this.listHead;
    let total = 0;
    while (node) {
      total += 1;
      node = node.nextNode;
    }
    return total;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let node = this.listHead;
    while (node.nextNode) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let current = 0;
    let node = this.listHead;
    while (current < index) {
      node = node.nextNode;
      current += 1;
    }
    return node;
  }

  pop() {
    let current = this.listHead;
    let previous;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let node = this.listHead;
    while (node.nextNode) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    // last list item
    if (node.value === value) return true;
    return false;
  }

  find(value) {
    let index = 0;
    let node = this.listHead;
    while (node.nextNode) {
      if (node.value === value) return index;
      node = node.nextNode;
      index += 1;
    }
    if (node.value === value) return index;
    return null;
  }

  insertAt(value, index) {
    let current = this.listHead;
    let previous;
    let currentIndex = 0;
    while (currentIndex < index) {
      previous = current
      current = current.nextNode
      currentIndex += 1
    }
    const newNode = new Node(value)
    newNode.nextNode = current
    previous.nextNode = newNode
  }

  removeAt(index) {
    // example
    // we want to remove the current index 3
    // we want to set nextNode of current index 2 to current index 4
    // remove nextNode from current index 3
    let current = this.listHead
    let previous;
    let currentIndex = 0
    while (currentIndex < index) {
      previous = current
      current = current.nextNode
      currentIndex += 1
    }
    const next = current.nextNode
    previous.nextNode = next
  }

  toString() {
    let node = this.listHead;
    let consoleMsg = "";
    while (node) {
      consoleMsg += `( ${node.value} ) => `;
      node = node.nextNode;
    }
    consoleMsg += `null`;
    console.log(consoleMsg);
  }
}

const list = new LinkedList();
list.append("index 1 node");
list.append("index 2 node");
list.append("index 3 node");
list.append("index 4 node");
list.append("index 5 node");
list.append("index 6 node");

list.prepend("new head");

console.log("list: ", list.listHead);

console.log("head: ", list.head());

console.log("tail: ", list.tail());

console.log("total items: ", list.size());

console.log("index 3: ", list.at(3));

list.toString();

// remove last item
list.pop();
list.toString();
console.log("total items: ", list.size());

console.log(list.contains("index 5 node"));
console.log(list.find("index 5 node"));

// test insertAt
console.log("///")
console.log("test insert at index")
list.insertAt("new index 3 node", 3)
list.toString()
console.log("total items: ", list.size());
console.log("test complete")
console.log("///")

// test removeAt
console.log("test remove at index")
list.removeAt(3)
list.toString()
console.log(list)
console.log("total items: ", list.size());
console.log("test complete")
console.log("///")

