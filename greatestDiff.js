let greatestDiff = (arr) => {

  if (!arr.length || arr.length === 1) {
    throw new Error('Not enough elements');
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr < min) {
      min = curr;
    }

    if (curr > max) {
      max = curr;
    }

  }

  return max - min;

}

greatestDiff([4,2,5,1,8,11]);
