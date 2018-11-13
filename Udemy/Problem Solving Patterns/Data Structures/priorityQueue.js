class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    let arr = this.values;
    arr.push(newNode);

    let currIndex = arr.length - 1;
    let elem = arr[currIndex];

    while(currIndex > 0) {
      let parentIndex = Math.floor(((currIndex - 1)/2))
    }
  }

  dequeue() {

  }


}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority
  }
}
