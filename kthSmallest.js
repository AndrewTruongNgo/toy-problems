/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root || !k) {
        return null;
    }

    let queue = [];

    let recurse = (node) => {

        if (node.left) {
            recurse(node.left);
        }

        queue.push(node.val);

        if (node.right) {
            recurse(node.right);
        }
    }

    recurse(root);

    return queue[k - 1];

};
