/*
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)



*/
function findArrayQuadruplet(arr, s) {
  let results = [];

  if (arr.length < 4) {
    return results;
  }

  arr.sort();

  for (let i = 0; i <= arr.length - 4; i++) {
    for (let j = 0; j <= arr.length - 3; j++) {
      let start = j + 1;
      let end = arr.length -1;
      let comp = s - arr[i] - arr[j];

      while (start < end) {
        if (arr[start] + arr[end] === comp) {
          results.push([arr[i], arr[j], arr[start], arr[end]]);
          // return results;
        }

        if (arr[start] + arr[end] < comp) {
          start++;
        }else {
          end--;
        }
      }
    }
  }
  return results;
}

findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20);
