/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    let map = {};
    for (let i = 0; i < J.length; i++) {
        map[J[i]] = true;
    }

    for (let i = 0; i < S.length; i++) {
        if (map[S[i]]) {
            count++;
        }
    }
    return count;
};
