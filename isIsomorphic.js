/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let arr = [];
    let char;
    let feq;

    char = s[0];
    feq = 1;
    arr.push(feq);

    for (let i = 1; i < s.length; i++) {
        let curr = s[i];
        if (char === curr) {
            arr.push(feq);
        } else {
            feq++;
            arr.push(feq)
            char = curr;
        }
    }

    char = t[0];
    feq = 1;

    for (let i = 1; i < t.length; i++) {
        let curr = t[i];

        if (curr !== char) {
            char = curr;
            feq++
        }

        if (arr[i] !== feq) {
            return false;
        }

    }
    return true;
};
