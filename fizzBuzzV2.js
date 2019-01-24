/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let results = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            results.push('FizzBuzz');
        } else if (i % 5 === 0) {
            results.push('Buzz');
        } else if (i % 3 === 0) {
            results.push('Fizz');
        } else {
            results.push(i + '');
        }
    }
    return results;
};
