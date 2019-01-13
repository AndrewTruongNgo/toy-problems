
/*
Your previous Plain Text content is preserved below:

Given a set of integers, e.g. {1,3,2}, and an array of random integers, e.g.
[1, 2, 2, 5, 4, 0, 1, 1, 2, 2, 0, 3,3]
 i
             j


Find the shortest continuous subarray that contains all of the values from the set.
Result: [1, 2, 2, 0, 3]

 */

function shortestSubArray (setInt, array) {
  let minSubArrayCount = Infinity;
  let minSubArray;
  let integers = new Set (setInt);
  let subArray;

  for (let i = 0; i < array.length; i++) {
    if (integers.has(array[i])) {
      integers.delete(array[i]);
      subArray = [];
      subArray.push(array[i]);
      for(let j = i + 1; j < array.length; j++) {
        subArray.push(array[j]);
        if (integers.has(array[j])) {
          integers.delete(array[j]);
        }
        if(integers.size === 0) {
            break;
        }
      }
    //completed sub array
      if (subArray.length < minSubArrayCount && integers.size === 0) {
        minSubArray = subArray;
        minSubArrayCount = subArray.length;
      }
    }
    integers = new Set (setInt);
  }
  return minSubArray;
}

// shortestSubArray(new Set ([1,2,3]), [1, 2, 2, 5, 4, 0, 1, 1, 2, 2, 0, 3,3])

if (JSON.stringify(shortestSubArray(new Set ([1,3,2]), [1, 2, 2, 5, 4, 0, 1, 1, 2, 2, 0, 3,3])) === JSON.stringify([1, 2, 2, 0, 3])) {
  console.log(true);
}
