/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let results = [];

    for(let i = left; i <= right; i++) {
        if (selfDivider(i)) {
            results.push(i);
        }
    }

    return results;

};

let selfDivider = (n) => {
    let num = n.toString().split('');

    for (let i = 0; i < num.length; i++) {
        if (n % Number(num[i]) !== 0) {
            return false
        }
    }

    return true;
}
