/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack[stack.length -1] !== map[s[i]]) {
                return false;
            } else {
                stack.pop();
            }
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.length;

};
