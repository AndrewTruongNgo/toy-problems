/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    words = s.split(' ');

    let lastWord = words[words.length - 1];

    if (lastWord.length <= 0) return 0;

    return lastWord.length;

};
