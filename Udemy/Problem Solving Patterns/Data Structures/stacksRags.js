class Stack {
  constructor() {
    this.array = [];

  }
  push(num) {
    let currMax = this.array[this.array.length - 1].max;
    let max = this.array.length === 0 ?
        num :
    		Math.max(num, currMax);

    this.values.push({
      val: num,
      max,
    });
  }

  pop() {
    if (this.array.length < 1) {
      throw new Error("No values");
    }

    return this.array.pop().val;
  }

  peek() {
    if (this.array.length < 1) {
      throw new Error("No values");
    }

    return this.array[this.array.length - 1].val;
  }

  max() {
    if (this.array.length < 1) {
      throw new Error("No values");
    }

    return this.array[this.array.length - 1].max;
  }
}
