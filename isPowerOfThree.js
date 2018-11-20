/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if (n < 1) {
        return false
    }

    for (let i = 0; i < n; i++) {
        curr = Math.pow(3, i);
        if (n === curr) {
            return true;
        }

        if (curr > n) {
            return false;
        }
    }

};
