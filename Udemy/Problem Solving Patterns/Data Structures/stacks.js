class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {

    if (!this.first) {
      return null;
    }
    let removed = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return removed.value;
  }

}

let stacks = new Stacks();
stacks.push(1);
