class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {

      let currentNode = this.root;

      while(currentNode) {
        if (currentNode.value === newNode.value) {
          return undefined;
        }
        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }

        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return false;
    }

    while(currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          return false
        }
        currentNode = currentNode.right;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          return false
        }
        currentNode = currentNode.left;
      }
    }
  }



}


let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(16);
tree.root.left = new Node(4);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.insert(7);
// tree.insert(20);
