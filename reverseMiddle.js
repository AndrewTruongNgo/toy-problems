/*

I: 'abcde'
O: 'baced'

*/

function reverseMiddle (string) {
  let array = string.split('');

  let middle = Math.floor(array.length/2);
  let startLeft = 0;
  let endLeft = middle - 1;
  let startRight;
  let endRight = array.length - 1;

  if (array.length % 2 === 1) {
    startRight = middle + 1;
  } else {
    startRight = middle;
  }

  let swap = (start, end) => {
    while(start <= end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }

  swap(startLeft, endLeft);
  swap(startRight, endRight);

  return array.join('');

}

reverseMiddle('abcde');
