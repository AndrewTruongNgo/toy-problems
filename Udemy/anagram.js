let anagram = (str, str2) => {
  let obj = {};
  let obj2 = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
  }

  for (let key in obj) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj2[key] !== obj[key]) {
      return false;
    }
  }
  return true;
}

anagram('tara', 'rata');
