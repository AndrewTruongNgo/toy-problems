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
    let results = '';
    let reverse = '';
    let currentElem = head;

    while (currentElem) {
        results += currentElem.val;
        reverse = currentElem.val + reverse;
        currentElem = currentElem.next;
    }

    if (results === reverse) {
        return true;
    } else {
    return false;
    }
};
