class MultiStack {
	constructor(numStacks) {
  	let array = new Array(numStacks * 5);
    for (let i = 0; i < numStacks; i++) {
    	array[i] = 0;
    }
    this.numStacks = numStacks;
  }

  push(stackNum, val) {

    let currentSize = this.size(stackNum);

		let position = stackNum * 5 + this.numStacks + currentSize;
    array[position] = val;

    array[stackNum] += 1;
  }

  pop(stackNum) {
    let currentSize = this.size(stackNum);

    let position = stackNum * 5 * this.numStacks + currentSize - 1

    let result = array[position]

    array[stackNum] -= 1;

		return result;

  }

  peek(stackNum) {

    let currentSize = this.size(stackNum);

    let position = stackNum * 5 * this.numStacks + currentSize - 1

    let result = array[position]

		return result;

  }

  size(stackNum) {
    return array[stackNum];
  }
}

const LOAD_FACTOR = 0.7;

class MultiStack {
  constructor(numStacks) {
    this.numStacks = numStacks;
    this.capacity = 5;
    this.array = new Array(numStacks * (this.capacity + 1));
    for (let i = 0; i < numStacks; i++) {
      this.array[i] = 0;
    }
  }

  push(stackNum, value) {
  	this.array[this.getIndex(stackNum, this.size(stackNum))] = value;
    this.array[stackNum]++;
    if (this.array[stackNum] / this.capacity >= LOAD_FACTOR) {
      this.resize();
    }
  }

  pop(stackNum) {
    const retVal = this.array[this.getIndex(stackNum, this.size(stackNum) - 1)];
    this.array[stackNum]--;
    return retVal;
  }

  peek(stackNum) {
    return this.array[this.getIndex(stackNum, this.size(stackNum) - 1)];
  }

  getIndex(stackNum, index, capacity = this.capacity) {
    return numStacks + (stackNum * capacity) + index;
  }

  resize() {
    const newArray = new Array(numStacks * (2 * this.capacity + 1));
    for (let i = 0; i < numStacks; i++) {
      newArray[i] = this.array[i];
    }
    for (let i = 0; i < numStacks; i++) {
      for (let j = 0; j < this.size(i); j++) {
        newArray[this.getIndex(i, j, this.capacity * 2)] = this.array[this.getIndex(i, j)];
      }
    }
    this.array = newArray;
  }

  size(stackNum) {
    return this.array[stackNum]
  }
}

let x = [];

/**
const multiStack = new MultiStack(10);
multiStack.push(0, 1);
multiStack.push(0, 2);
multiStack.push(2, 15);
multiStack.push(2, 10);
multiStack.size(2) // 2
multiStack.peek(2) // 10
multiStack.pop(2) // 10
multiStack.size(2) // 1
multiStack.peek(2) // 15
multiStack.peek(7) // error
*/
