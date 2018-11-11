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

  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentNode = this.head;
    let newTail = currentNode;
    while(currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  // pop() {
  //   if (!this.head) {
  //     return undefined;
  //   }
  //
  //   let currentNode = this.head;
  //   while(currentNode.next.next) {
  //       currentNode = currentNode.next;
  //   }
  //   let temp = currentNode.next;
  //   this.tail = currentNode;
  //   this.length--;
  //   return temp;
  // }

  shift() {
    if (!this.head) {
      return undefined;
    }
    // let currentHead = this.head
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this.head;
  }

  length() {
    return this.length;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(value, index) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return currentNode;
    }
    return false;
  }

  insert(value, index) {
    if (index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else if (index === 0) {
      return !!this.unshift(value); //Returns boolean of returned obj
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      this.shift();
      return list;
    } else if (index === this.length -1) {
      this.pop();
      return list;
    } else {
      let prev = this.get(index - 1);
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hi');
list.push('there');
list.push('Paul');
// list.pop();
