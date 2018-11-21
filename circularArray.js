let circularArray = (arr) => {
  let currIndex = 0;
  let storage = {};
  let length = arr.length;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      return false;
    }

    currIndex = (currIndex + arr[i]) % length;

    if (storage[currIndex]) {
      return false;
    } else {
      storage[currIndex] = 1;
    }
  }

  return currIndex === 0;
}

circularArray([2, 2, -1]);


let circularArray = (arr) => {
  let storage = {};
  let length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let pos = (arr[i] + i) % length;
    if (storage[pos] === undefined) {
      storage[pos] = 1;
    } else {
      return false;
    }
  }

  let arr2 = Object.values(storage)
  let total = arr2.reduce((a, b) => a + b);

  return total === length;

}
circularArray([2, 2, -1]);
