let checkInclusion = (s1, s2) => {
  //Initialize perm array
  if (s1.length > s2.length) return false;

  let perm = new Array(26).fill(0);
  let charCode = 'a'.charCodeAt();
  for(let i = 0; i < s1.length; i++) {
    let curr = s1[i];
    let currIndex = curr.charCodeAt() - charCode;
    perm[currIndex]++;
  }

  //Initialize subArray
  let subArray = new Array(26).fill(0);
  let start = 0;
  let length = s1.length;
  let sub = s2.slice(start, length);
  for (let i = 0; i < sub.length; i++) {
    let curr = sub[i];
    let currIndex = curr.charCodeAt() - charCode;
    subArray[currIndex]++;
  }

  //Sliding Window
  for (let i = length; i < s2.length; i++) {
    let valid = true;
    for (let j = 0; j < subArray.length; j++) {
      if (perm[j] !== subArray[j]) {
        valid = false;
        break;
      }
    }
    if (valid) return true;
    subArray[s2[i - length].charCodeAt() - charCode]--;
    subArray[s2[i].charCodeAt() - charCode]++;
  }
  return false;
}

checkInclusion('abc', 'baeck');




let checkInclusion = (s1, s2) => {
  //Initialize perm array
  let arr = new Array(26).fill(0);
  let charCode = 'a'.charCodeAt();
  s1.split('').forEach((char) => arr[char.charCodeAt() - charCode]++);

  let length = s1.length;
  let start = 0;
  let end = length;

  while(s2[end - 1]) {
    let sub = new Array(26).fill(0);
    let subArr = s2.slice(start, end);
    let isValid = true;
    subArr.split('').forEach((char) => {
      sub[char.charCodeAt() - charCode]++;
    })
    for(let i = 0; i < sub.length; i++) {
      if (sub[i] !== arr[i]) {
        isValid = false;
      }
    }
    if(isValid) return true;
    start++;
    end++;
  }

  return false;
}

checkInclusion('abc', 'back');
