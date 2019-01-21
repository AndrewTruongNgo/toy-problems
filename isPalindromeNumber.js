/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNumber = function(x) {
    if (x < 0) return false;

    let anagram = (str) => {
      let arr = str.split('');
      let start = 0;
      let end = arr.length - 1;

      while(start <= end) {
        if (arr[start] !== arr[end]) {
          return false;
        }
        start++;
        end--;
      }
      return true;
    }
    return anagram(x + '');
};
