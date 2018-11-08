/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;

};

//write methods here!

LinkedList.prototype.addToTail = function(number) {
  let node = this.makeNode(number);
  let currentNode = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

};

LinkedList.prototype.removeHead = function() {
  let currentNode = this.head;
  if (!this.head) {
    return null;
  } else {
    this.head = this.head.next;
  }
  return currentNode;
};

LinkedList.prototype.contains = function(number) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === number) {
      return true;
    }
      currentNode = currentNode.next;
  }
  return false;

};

LinkedList.prototype.makeNode = function(value) {
  let Node = (number) => {
    this.value = number;
    this.next = null;
  }
  let node = Node(value);
  return node;
};


var list = new LinkedList();
list.tail;         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
list.contains(5);  //yields 'true';
list.contains(6);  //yields 'false';
list.removeHead(); //yields '4';
list.tail.value;   //yields '5';
list.removeHead(); //yields '5';
list.removeHead(); //yields 'null';
