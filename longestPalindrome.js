/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0;
    let odd = false;
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }

    for (let x in hash) {
        if (hash[x] % 2 === 0) {
            count += hash[x]
        }
        if (hash[x] % 2 === 1) {
            count += (hash[x] - 1);
            odd++;
        }
    }

    if (odd) {
        count++;
    }

    return count;

};
