/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

    if (num <= 0) {
        return false;
    }

    for (let i = 0; i < num; i++) {
        if (Math.pow(i, 4) === num) {
            return true;
        }

        if (Math.pow(i, 4) > num) {
            return false;
        }
    }

};
