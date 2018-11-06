let linkedList = () => {
  let length = 0;
  let head = null;

  let Node = (elem) => {
    this.value = elem;
    this.next = null;
  }

  this.size = () => {
    return length;
  }

  this.head = () => {
    return head;
  }

  this.add = (elem) => {
    let node = new Node(elem);

    if (head === null) {
      head = node;
    } else {
      currentNode = head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  this.remove = (elem) => {
    let currentNode = head;
    let previousNode;

    if (currentNode.value === elem) {
      let head = currentNode.next;
    } else {
        while(currentNode.value !== elem) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    }
    length--;
  }

}
