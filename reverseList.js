/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let node = head;
    let next = null;
    let prev = null;

    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};
