/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2, ...args) {
  // TODO: Your code here!
  let results = '';
  let storage = {};

  if (!string1.length || !string2.length) {
    return results;
  }

  for (let i = 0; i < string1.length; i++) {
    storage[string1[i]] = 1;
  }

  for (let j = 0; j < string2.length; j++) {
    if (storage[string2[j]] > 0) {
      results += string2[j];
    }
  }
  return results;
};

commonCharacters('acexivou', 'aegihobu');
