/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let max = root.val;
    let count = 1;

    let dfs = (node) => {
        if (!node) {
            return;
        }

        if (node.val === max) {
            count++;
        } else {
            max = node.val;
            count = 1;
        }

        dfs(node.right);
        dfs(node.left);
    }

    dfs(root);
    return max;

};
