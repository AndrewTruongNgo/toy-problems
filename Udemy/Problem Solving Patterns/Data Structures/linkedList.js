class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // push(value) {
  //   let newNode = new Node(value);
  //   if (!this.head) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //   } else {
  //     let currentNode = this.head;
  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next = newNode;
  //     this.tail = newNode;
  //   }
  //   this.length++;
  //   return this;
  // }






}

let list = new SinglyLinkedList();
