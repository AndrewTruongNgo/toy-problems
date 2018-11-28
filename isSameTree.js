/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let queue = [];
    let bfsP = [];
    let bfsQ = [];

    if (!p || !q) {
        return false;
    }

    let bfs = (node, arr) => {
        queue.push(node);

        while(queue.length) {
            let currNode = queue.shift();
            arr.push(currNode.val);

            if (currNode.left) {
                queue.push(currNode.left);
            } else {
                arr.push(null);
            }

            if (currNode.right) {
                queue.push(currNode.right);
            } else {
                arr.push(null);
            }
        }
    }

    bfs(p, bfsP);
    bfs(q, bfsQ);

    return JSON.stringify(bfsP) === JSON.stringify(bfsQ);
};
