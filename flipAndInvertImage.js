/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {

    for (let i = 0; i < A.length; i++) {
        reverseRow(A[i]);
    }

    return A;

};

let reverseRow = (row) => {
    let left = 0;
    let right = row.length -1;

    while(left < right) {
        let temp = row[left];
        row[left] = row[right];
        row[right] = temp;
        left++;
        right--;
    }

    for(let i = 0; i < row.length; i++) {
        if (row[i] === 0) {
            row[i] = 1;
        } else {
            row[i] = 0;
        }
    }
};
