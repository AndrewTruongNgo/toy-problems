/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    if (!matrix || !target) {
        return false;
    }

    for (let i = 0; i < matrix.length; i++) { //rows
        for (let j = 0; j < matrix[0].length; j++) { //col
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};
