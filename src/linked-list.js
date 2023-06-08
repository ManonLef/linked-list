import Node from "./node";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let node = this.head;

    // when no items in list, new node will be the head
    if (node === null) {
      this.head = new Node(value);
    } else {
      // iterate to end of the list and insert there.
      while (node.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = new Node(value);
    }
  }

  prepend(value) {
    const currentHead = this.head;

    const newHead = new Node(value);
    newHead.nextNode = currentHead;

    this.head = newHead;
  }

  size() {
    let node = this.head;
    let total = 0
    while (node) {
      total++
      node = node.nextNode
    }
    return total
  }
}

const list = new LinkedList();
list.append("node");
list.append("next node");
list.append("next next node");
list.append("next next next node")
console.log("list: ", list.head);

list.prepend("new head");
console.log("updated list: ", list.head);

console.log("total items: ", list.size())