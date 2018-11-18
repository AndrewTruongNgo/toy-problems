/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    if(n < 0) {
        return false;
    }

    let x = 0;
    let curr = Math.pow(2, x);

    while(curr < n) {
        x++;
        curr = Math.pow(2, x);
    }

    if (curr === n) {
        return true;
    } else {
        return false;
    }

};
