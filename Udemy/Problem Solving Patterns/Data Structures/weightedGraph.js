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
    this.values.sort((a,b) => a.priority - b.priority);
  }
}


class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error('Vertex not found');
    }

    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});

    return this;
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    //Builds distances and PriorityQueue
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //While PriorityQueue has elem, compare smallest in distances
    while (nodes.values.length > 0) {
      let smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // DONE
        console.log(distances);
        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;

      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }

    path.push(start);
    return path.reverse();
  }

}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra('A', 'E');






let test = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Done');
  }, 2000)
})

console.log(test);

test.then((value) => {
  console.log('this is the ' + value);
}, (val) => {
  console.log('rejected: ' + val);
});


console.log('See this async code');




let firstFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hi my name is '), 2000);
  });
}

let secondFunction = (dataFromFirst) => {
  return new Promise((resolve, reject) => {
    resolve(dataFromFirst + 'Andrew')
  })
}

firstFunction().then((data) => {
  return secondFunction(data);
}).then((data) => {
  console.log(data);
})
