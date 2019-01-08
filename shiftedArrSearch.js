function shiftedArrSearch(shiftArr, num) {
  // your code goes here

  let shift;
  let left;
  let right;

  for (let i = 0; i < shiftArr.length; i++) {
    if (shiftArr[i] > shiftArr[i + 1]) {
      shift = i;
    }
  }

  if (num > shiftArr[0]) {
    left = 0;
    right = shift;
  } else {
    left = shift + 1;
    right = shiftArr.length - 1;
  }

  while(left <= right) {

    let middle = Math.floor((right - left)/2 + left)
    // console.log(middle)

    if (middle === left || middle === right) {
      return middle;
    }

    if (num === shiftArr[middle]) {
      return middle;
    } else {
      if (num > shiftArr[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2));
