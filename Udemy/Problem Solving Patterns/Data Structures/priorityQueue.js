class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    let arr = this.values;
    arr.push(newNode);

    let currIndex = arr.length - 1;
    let curr = arr[currIndex];

    while(currIndex > 0) {
      let parentIndex = Math.floor(((currIndex - 1)/2));
      let parent = arr[parentIndex];
      if(curr.priority <= parent.priority) {
        break;
      }
      arr[parentIndex] = curr;
      arr[currIndex] = parent;
      currIndex = parentIndex;
    }
  }



  dequeue() {
    let arr = this.values;
    let max = arr[0];
    let curr = arr.pop();

    if(arr.length < 1) {
      return max;
    }

    arr[0] = curr;
    let currIndex = 0;
    let leftIndex = currIndex * 2 + 1;
    let rightIndex = currIndex * 2 + 2;
    let left = arr[leftIndex];
    let right = arr[rightIndex];

    while(curr.priority < left.priority || curr.priority < right.priority) {
      if (left.priority > right.priority) {
        arr[currIndex] = left;
        arr[leftIndex] = curr;
        currIndex = leftIndex;

        curr = arr[currIndex];
        leftIndex = currIndex * 2 + 1;
        rightIndex = currIndex * 2 + 2;
        left = arr[leftIndex];
        right = arr[rightIndex];
        if (!arr[leftIndex]) {
          break;
        }
        if (!arr[rightIndex]) {
          break;
        }

      } else {
        arr[currIndex] = right;
        arr[rightIndex] = curr;
        currIndex = rightIndex;

        curr = arr[currIndex];
        leftIndex = currIndex * 2 + 1;
        rightIndex = currIndex * 2 + 2;
        left = arr[leftIndex];
        right = arr[rightIndex];
        if (!arr[leftIndex]) {
          break;
        }
        if (!arr[rightIndex]) {
          break;
        }
      }
    }

    return max;
  }


}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority
  }
}

let list = new PriorityQueue();
list.enqueue('headache', 1);
list.enqueue('booboo', 2);
list.enqueue('owie', 3);

list.enqueue('dead', 5);
