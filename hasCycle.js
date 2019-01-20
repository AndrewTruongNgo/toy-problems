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
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(slow && fast) {

        if (fast.next === null) return false;
        if (fast.next.next === null) return false;

        slow = slow.next;
        fast = fast.next.next;

        if (slow.val === fast.val) return true;
    }
    return false
};
