/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let fast = head;
    let slow = head;


    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if (fast) {
        slow = slow.next;
    }

    let prevNode = null;
    let nextNode = null;

    while(slow) {
        nextNode = slow.next;
        slow.next = prevNode;
        prevNode = slow;
        slow = nextNode;
    }
    fast = head;
    while(prevNode) {
        if (prevNode.val !== fast.val) {
            return false;
        }

        prevNode = prevNode.next;
        fast = fast.next;
    }

    return true;
};
