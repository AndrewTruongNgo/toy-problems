function reverseWords(arr) {
  // your code goes here
  // let reversed = '';


  let reverseWord = (char, start, end) => {
    let temp = null;
    while(start < end) {
      temp = char[start];
      char[start] = char[end];
      char[end] = temp;
      start++;
      end--;
    }
  }

  reverseWord(arr, 0, arr.length - 1);

  // wordStart = null
  //   for i from 0 to n-1:
  //       if (arr[i] == ' '):
  //           if (wordStart != null):
  //               reverseWord(arr, wordStart, i-1)
  //               wordStart = null
  //       else if (i == n-1):
  //           if (wordStart != null):
  //               reverseWord(arr, wordStart, i)
  //       else:
  //           if (wordStart == null):
  //               wordStart = i

  let wordStart = null;

  for (let i = 0; i < arr.length; i++) {
    console.log(wordStart)

    if (wordStart === null) {
      wordStart = i;
    }

    if (arr[i] === ' ') {
        reverseWord(arr, wordStart, i - 1);
        wordStart = null;
    } else if (i === arr.length - 1) {
      if (wordStart !== null) {
        reverseWord(arr, wordStart, i);
      }
    }
  }

  return arr;
}

arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];
reverseWords(arr);
