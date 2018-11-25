class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.previous;
      this.tail.next = null;
      removed.previous = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if(!this.head) {
      return undefined;
    }
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.previous = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }
    let middle = this.length/2;

    if (index < middle) {
      let count = 0;
      let current = this.head;
      while(count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while(count !== index) {
        current = current.previous;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    let newNode = new Node(value);

    if(index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.unshift(value);
    }

    if(index === this.length) {
      return this.push(value);
    } else {
      let prevNode = this.get(index - 1);
      let afterNode = prevNode.next;
      newNode.next = afterNode;
      newNode.previous = prevNode;
      afterNode.previous = newNode;
      prevNode.next = newNode;
    }
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.unshift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let node = this.get(index);
      let beforeNode = node.previous;
      let afterNode = node.next;
      beforeNode.next = node.next;
      afterNode.previous = node.previous;
      node.next = null;
      node.previous = null;
      this.length--;
      return node;
    }
  }

}


let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
