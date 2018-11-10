let bubbleSort = (arr) => {

  let count = 0;

  let sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        count++;
      }
    }

    if (count > 0) {
      count = 0;
      sort(arr);
    }
  }

  sort(arr);

  return arr;

}

bubbleSort([1,4,5,3,15,32,42,100,18,2]);
