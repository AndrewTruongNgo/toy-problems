/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(!s.length) return 0;
    let arr = s.split(' ');

    return arr.length;
};
