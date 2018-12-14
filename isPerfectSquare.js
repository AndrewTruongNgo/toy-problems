/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    for (let i = 0; i <= num; i++) {
        let curr = i * i;

        if (curr > num) return false;

        if (curr === num) return true;
    }

};
