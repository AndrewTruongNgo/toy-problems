/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

    matrix[0][0] = 1;

    for (let i = 1; i < matrix.length; i++) {
        matrix[i][0] = 1;
    }

    for (let i = 1; i < matrix[0].length; i++) {
        matrix[0][i] = 1;
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
};

uniquePaths(3,2);
