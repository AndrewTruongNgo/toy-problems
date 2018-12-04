function reverseWords(arr) {
  // your code goes here
  let reverse = (arr, start, end) => {
    while(start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(arr, 0, arr.length - 1);

  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      reverse(arr, start, i - 1);
      start = i + 1;
    }

    if (i === arr.length - 1) {
      reverse(arr, start, i);
    }
  }

  return arr;
}

reverseWords([ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]);
