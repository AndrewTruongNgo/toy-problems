/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    str = s.split('');
    let start = 0;
    let end = s.length - 1;

    while(start <= end) {
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
    return str.join('');
};
