/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/
/*

    5    num = 7
   /  \
 2 .    8
   \
    3

      10    num = 7
     /   \
   5 .    12
  /  \      \
 2 .  9 .     14
      /
     8
    /




    4    num = 2
   / .\
  3 .  5

#https://www.cs.usfca.edu/~galles/visualization/BST.html
#However, num isn’t necessarily a key in the given tree. It could be any number. Moreover, even if num is in the tree, finding it first won’t help.

#To get the full score for problem solving, your peer must be able to explain why it’s possible to always store the last key smaller than num without comparing it to the previously stored key.

#
*/

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  // your code goes here
  let currMax = 0;
  let currNode = this.root;

  while (currNode) {

    if (num < currNode.key) {
      if(currNode.left) {
       currNode = currNode.left;
      } else {
        break
      }

    }

    if (num > currNode.key) {

      currMax = currNode.key;

      if (currNode.right) {
        currNode = currNode.right;
      } else {
        break;
      }
    }

  }
  return currMax;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(7);

console.log("Largest smaller number is " + result);
