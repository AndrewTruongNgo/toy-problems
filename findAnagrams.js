/*

Anagram Groups
Given a list of words, return an array of arrays consisting of the groups of words that are anagrams of each other.

Input: words , Array of Strings, [String]
Output: Array of Array of Strings, [[String]]

Example
Input:

a: len of array
s: len of longest string

O(a * s log(s))

Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

 */

function assignCharsToPrimes(){
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let zip = {};
  chars.forEach((char, index) => {
    zip[char] = primes[index]
  })
  return zip;
}

let primes = assignCharsToPrimes();

function wordCount (word) {
  return word.split('').reduce((a,b) => (a * primes[b]), 1);
}

function findAnagrams(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let count = wordCount(arr[i]);
    if (!map.hasOwnProperty(count)) {
      map[count] = [arr[i]];
    } else {
      map[count].push(arr[i]);
    }
  }

  return Object.values(map);

}

console.log(findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
