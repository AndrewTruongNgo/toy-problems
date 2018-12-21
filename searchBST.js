/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let currNode = root;

    while(currNode) {
        if (val === currNode.val) {
            return currNode;
        } else if (val < currNode.val) {
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
        }
    }

    return null;
};
