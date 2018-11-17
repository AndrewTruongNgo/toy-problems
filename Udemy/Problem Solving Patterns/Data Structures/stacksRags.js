// class Stack {
//   constructor() {
//     this.array = [];
//
//   }
//   push(num) {
//     let currMax = this.array[this.array.length - 1].max;
//     let max = this.array.length === 0 ?
//         num :
//     		Math.max(num, currMax);
//
//     this.values.push({
//       val: num,
//       max,
//     });
//   }
//
//   pop() {
//     if (this.array.length < 1) {
//       throw new Error("No values");
//     }
//
//     return this.array.pop().val;
//   }
//
//   peek() {
//     if (this.array.length < 1) {
//       throw new Error("No values");
//     }
//
//     return this.array[this.array.length - 1].val;
//   }
//
//   max() {
//     if (this.array.length < 1) {
//       throw new Error("No values");
//     }
//
//     return this.array[this.array.length - 1].max;
//   }
// }

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({value, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      throw new Error('Vertex already created');
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error('Vertex(s) not created');
    }

    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
