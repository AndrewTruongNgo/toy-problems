/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.smallest = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    if (typeof x !== 'number') {
        return null;
    }

    if (!this.stack.length) {
        this.smallest = Infinity;
    }

    if (x < this.smallest) {
        this.smallest = x;
    }

    this.stack.push({value: x, smallest: this.smallest})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.stack.length) {
        return null;
    }

    let removed = this.stack.pop();

    if (!this.stack.length) {
        return null;
    }

    this.smallest = this.stack[this.stack.length - 1].smallest;
    // return removed;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.smallest;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
