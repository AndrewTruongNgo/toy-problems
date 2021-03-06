function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  let storage = {};
  let oddCount = 0;

  for (let i = 0; i < theString.length; i++) {
    if (storage[theString[i]] === undefined) {
      storage[theString[i]] = 1;
    } else {
      storage[theString[i]]++;
    }
  }

  let values = Object.values(storage);
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 1) {
      oddCount++;
    }
  }

  if (oddCount <= 1) {
    return true;
  }


  return false;
}


















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
