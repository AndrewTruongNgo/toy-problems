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
    let map = {};
    let result;
    let count = 0;

    let helper = (node) => {
        if(!map[node.val]) {
            map[node.val] = 1;
        } else {
            map[node.val]++;
        }

        if (node.right) {
            helper(node.right);
        }

        if(node.left) {
            helper(node.left);
        }

    }

    helper(root);

    for(let x in map) {
        if (map[x] > count) {
            result = x;
            count = map[x];
        }
    }
    return result;
};
