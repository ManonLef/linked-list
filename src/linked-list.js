import Node from "./node";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // adds a new node to the end of the list
  append(value) {
    let node = this.head;

    // when no items in list, new node will be the head as well
    if (node === null) {
      console.log("head is null");
      this.head = new Node(value);
      console.log("head is now", this.head);
    } else {
      // iterate to end of the list and insert there.
      while (node.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = new Node(value);
    }
  }
}

const list = new LinkedList();
list.append("noob");
list.append("another noob");
list.append("another another noob");
