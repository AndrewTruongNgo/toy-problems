// input:  x = 7, n = 3
// output: 1.913
//
// input:  x = 9, n = 2
// output: 3

// assign left and right
// assign middle
// while x - middle >= 0.001
// find math pow
// if result is < x
// left = middle
// assign new middle


function rootOfNumber(x, n) {
  let start = 0;
  let end = x;
  let middle = (start + end) / 2;
  let result = Math.pow(middle, n);

  while(end - start >= 0.001) {
    middle = (start + end) / 2;
    result = Math.pow(middle, n);
    if (result < x) {
      start = middle;
    } else if (result > x) {
      end = middle;
    } else {
      return middle;
    }
  }
  return middle;
}

rootOfNumber(7, 3);
