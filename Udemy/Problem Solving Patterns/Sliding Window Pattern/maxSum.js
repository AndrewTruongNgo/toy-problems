let maxSum = (arr, num) => {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  temp = max;

  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[num - j] + arr[j];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
