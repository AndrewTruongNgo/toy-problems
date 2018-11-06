/**
 * @param {string} s
 * @return {number}
 */

let storage = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let counter = 0;
    let array = s.split('');

    for (let i = 0; i < array.length; i++) {
        let currElem = array[i];
        let nextElem = array[i + 1];
        if (storage[currElem] < storage[nextElem]) {
            counter -= storage[currElem];
        } else {
            counter += storage[currElem];
        }
    }
    return counter;
};
