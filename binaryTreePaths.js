/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let results = [];
    let path = '';

    let recurse = (node, currPath) => {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            currPath = currPath + node.val;
            results.push(currPath);
        }

        recurse(node.left, currPath + node.val + '->');
        recurse(node.right, currPath + node.val + '->');
    }

    recurse(root, path);
    return results;

};
