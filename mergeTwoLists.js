/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    let head = new ListNode(0);
    let curr = head;

    while(l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = new ListNode(l1.val);
            l1 = l1.next;
            curr = curr.next;
        } else {
            curr.next = new ListNode(l2.val);
            l2 = l2.next;
            curr = curr.next;
        }
    }

    while (l1) {
        curr.next = new ListNode(l1.val);
        l1 = l1.next;
        curr = curr.next;
    }

    while (l2) {
        curr.next = new ListNode(l2.val);
        l2 = l2.next;
        curr = curr.next;
    }

    return head.next;

};
