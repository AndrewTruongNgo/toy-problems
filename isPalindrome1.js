/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x + '';
    let arr = str.split('').reverse().join('');
    return Number(arr) === x;
};
