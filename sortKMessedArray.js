let sortKMessedArray = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let space = k;
      let min = arr[i];
      let minIndex = i;
      while (space >= 1) {
          if (arr[i + space] < min) {
            min = arr[i + space];
            minIndex = i + space;
          }
          space--;
      }
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

sortKMessedArray([1, 4, 2, 3, 5, 6], 2)
