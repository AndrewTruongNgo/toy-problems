let checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  //Initialize s1
  let perm = new Array(26).fill(0);
  let charCode = 'a'.charCodeAt();
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    let index = char.charCodeAt() - charCode;
    perm[index]++;
  }

  //Initialize s2 sub
  let subArr = new Array(26).fill(0);
  let start = 0
  let end = s1.length;
  let sub = s2.slice(start, end);
  for (let i = 0; i < sub.length; i++) {
    let curr = sub[i];
    let index = curr.charCodeAt() - charCode;
    subArr[index]++;
  }

  //Sliding window
  for (let i = end; i <= s2.length; i++) {
    let match = true;
    for (let j = 0; j < subArr.length; j++) {
      if (perm[j] !== subArr[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
    if(i===s2.length) return false;
    subArr[s2[i - end].charCodeAt() - charCode]--;
    subArr[s2[i].charCodeAt() - charCode]++;
  }
  return false;
}

checkInclusion('abc', 'baeck');
