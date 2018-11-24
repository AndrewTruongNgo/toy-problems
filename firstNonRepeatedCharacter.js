/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  let storage = {};

  for (let i = 0; i < string.length; i++) {
    if (!storage[string[i]]) {
      storage[string[i]] = 1;
    } else {
      storage[string[i]]++;
    }
  }

  for (let j = 0; j < string.length; j++) {
    if (storage[string[j]] === 1) {
      return string[j];
    }
  }
  return -1;

};

firstNonRepeatedCharacter('AACBDB');
