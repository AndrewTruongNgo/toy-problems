/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

    let result = false;

    let dfs = (node, count) => {
        if (!node) {
            return;
        }

       dfs(node.left, count + node.val);
       dfs(node.right, count + node.val);

        if(!node.left && !node.right && count + node.val === sum) {
            result = true;
            return;
        }
    }

    dfs(root, 0);
    return result;

};
