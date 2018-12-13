/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let min;

    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];
        if (char > target) {
            if (!min) {
                min = char;
            }

            if (char < min) {
                min = char;
            }
        }
    }

    return min;
};
