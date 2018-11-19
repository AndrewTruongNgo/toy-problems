let palindromePermutation = (str) => {
  let storage = {};
  let oddCount = 0;

  if (!str.length) {
    throw new Error('There are no characters')
  }

  for (let i = 0; i < str.length; i++) {
    if (storage[str[i]] === undefined) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]]++;
    }
  }

  let values = Object.values(storage);

  for (let j = 0; j < values.length; j++) {
    if (values[j] % 2 === 1) {
      oddCount++;
    }
  }

  if (oddCount > 1) {
    return false;
  } else {
    return true;
  }


}

palindromePermutation('racecr')
