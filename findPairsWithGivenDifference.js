function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let results = [];
  let hash = {};

  for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    if(hash[current]) {
      // results.push([arr[hash[current]], arr[i]]);
    } else {
      let key = k + current;
      hash[key] = i;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    let current = arr[j];

    if (hash[current]) {
      results.push([arr[j], arr[hash[current]]]);
    }
  }

  return results;

}

// input:  arr = [0, -1, -2, 2, 1], k = 1
// output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

// findPairsWithGivenDifference([0, -1, -2, 2, 1], 1);
findPairsWithGivenDifference([-2, -1, 0, 1, 2], 1);
