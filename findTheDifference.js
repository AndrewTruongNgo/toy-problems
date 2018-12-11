/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]]) {
            return t[j];
        } else {
            map[t[j]]--;
        }
    }

};
