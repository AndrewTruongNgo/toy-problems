/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let nodes = preorder.split(',');
    let leaf = 1;
    let i = 0;

    for (i = 0; i < nodes.length && leaf > 0; i++) {
        let node = nodes[i];
        if (node !== '#') {
            leaf++;
        } else {
            leaf--;
        }
    }

    return leaf === 0 && i === nodes.length;
};
