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
var insertIntoBST = function(root, val) {
    let currNode = root;

    while (currNode) {
        if (val > currNode.val) {

            if (currNode.right) {
            currNode = currNode.right;
            } else {
                currNode.right = new TreeNode(val);
                break;
            }

        } else {

            if (currNode.left) {
            currNode = currNode.left;
            } else {
                currNode.left = new TreeNode(val);
                break;
            }
        }
    }

    return root;

};
