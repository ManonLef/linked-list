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
    let total = 0
    while (node) {
      total += 1
      node = node.nextNode
    }
    return total
  }

  head() {
    return this.listHead
  }

  tail() {
    let node = this.listHead
    while (node.nextNode) {
      node = node.nextNode
    }
    return node
  }

  at(index) {
    let current = 0
    let node = this.listHead
    while (current < index) {
      node = node.nextNode
      current += 1
    }
    return node
  }
}

const list = new LinkedList();
list.append("node");
list.append("next node");
list.append("next next node");
list.append("next next next node")
console.log("list: ", list.listHead);

list.prepend("new head");
console.log("updated list: ", list.listHead);

console.log("head: ", list.head())

console.log("total items: ", list.size())

console.log("tail: ", list.tail())

console.log("index: ", list.at(3))