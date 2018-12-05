class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return false;
    }
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return undefined;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return undefined;
    }

    for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
      if (this.adjacencyList[vertex1][i] === vertex2) {
        this.adjacencyList[vertex1].splice(i,1);
      }
    }

    for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
      if (this.adjacencyList[vertex2][i] === vertex1) {
        this.adjacencyList[vertex2].splice(i,1);
      }
    }
    return this;
  }

  removeVertex(vertex) {
    let arr = this.adjacencyList;
    if (!arr[vertex]) {
      return undefined;
    }
    let vertexList = arr[vertex];

    vertexList.forEach((elem) => (
      this.removeEdge(vertex, elem)
    ));

    delete arr[vertex];

    return this;
  }

  dfs(startingNode) {
    let results = [];
    let storage = {};
    let recurse = (node) => {
      results.push(node);
      storage[node] = true;
      this.adjacencyList[node].forEach((childNode) => {
        if (!storage[childNode]) {
          return recurse(childNode)
        }
      })
    }

    recurse(startingNode);
    return results;
  }
  
  dfsi(startingNode) {
    let results = [];
    let stack = [];
    let visited = {};
    stack.push(startingNode);
    visited[startingNode] = true;

    while (stack.length > 0) {
      let removed = stack.pop();
      results.push(removed);
      this.adjacencyList[removed].forEach((elem) => {
        if(!visited[elem]) {
          visited[elem] = true;
          stack.push(elem)
        }
      })
    }
    return results;
  }

  bfs(startingNode) {

    let queue = [];
    let results = [];
    let visited = {};
    let curr;
    queue.push(startingNode);
    visited[startingNode] = true;

    while(queue.length > 0) {
      curr = queue.shift();
      results.push(curr);

      this.adjacencyList[curr].forEach((elem) => {
        if (!visited[elem]) {
          queue.push(elem);
          visited[elem] = true;
        }
      })
    }
    return results;
  }

}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.dfs("A")
