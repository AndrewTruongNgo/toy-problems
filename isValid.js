/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let storage = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
      let key = s[i];
      let val = storage[key];

      if (val) {
        stack.push(val);
      } else {
        let temp = stack.pop();
        if (temp !== key) {
          return false;
        }
      }

    }

    return stack.length === 0;

};

isValid("(]");
