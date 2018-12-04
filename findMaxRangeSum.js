function findMaxRangeSum (arr) {
  let max = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currNum = arr[i];
    curr += currNum;
    if (curr < 0) {
      curr = 0;
    } else {
       if (curr > max) {
         max = curr;
        }
     }
  }
  return max;
}


findMaxRangeSum([1,10,-12, 3, 4,-2, 10, -6, 2])
