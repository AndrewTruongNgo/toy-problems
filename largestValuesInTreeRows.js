//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
    let queue = [];
    let results = [];
    let max = -Infinity;

    if (!t) {
        return queue;
    }

    queue.push(t);

    while(queue.length) {
        let row = queue.length;
        for (let i = 0; i < row; i++) {
            let removed = queue.shift();
            if (removed.value > max) {
                max = removed.value;
            }
            if (removed.right) {
                queue.push(removed.right);
            }
            if (removed.left) {
                queue.push(removed.left);
            }
        }
            results.push(max);
            max = -Infinity;
    }
    return results;
}
