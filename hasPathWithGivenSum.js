//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    let count = 0;
    let result = false;

    if (!t) {
        return false;
    }

    let recurse = (node) => {
        count += node.value;

        if (node.left) {
            recurse(node.left);
        }

        if (node.right) {
            recurse(node.right);
        }

        if (!node.left && !node.right) {
            if (count === s) {
                result = true
            } else {
               results = false;
            }
        }
    }

    recurse(t);
    return result;
}
