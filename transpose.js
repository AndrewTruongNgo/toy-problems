/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let result = [];

    for (let i = 0; i < A[0].length; i++) {
        let row = [];
        for (let j = 0; j < A.length; j++) {
            row.push(A[j][i]);
        }
        result.push(row);
    }

    return result;

};
