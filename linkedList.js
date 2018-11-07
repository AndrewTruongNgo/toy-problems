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
  // this.tail = null;

  let Node = (number) => {
    this.value = number;
    this.next = null;
  }

};

//write methods here!

LinkedList.prototype.addToTail = function(number) {
  let node = new Node(number);

  if (this.head === null) {
    this.head = node;
  } else {
    while(this.head.next) {

    }
  }

};

LinkedList.prototype.removeHead = function() {

};

LinkedList.prototype.contains = function(number) {

};

LinkedList.prototype.makeNode = function() {

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
