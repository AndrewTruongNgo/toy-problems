function findDuplicates(arr1, arr2) {
  // your code goes here
  let results = [];
  let shortArr = null;
  let longArr = null;

  if (arr1.length > arr2.length) {
    shortArr = arr2;
    longArr = arr1;

  } else {
    shortArr = arr1;
    longArr = arr2;
  }

  let binarySearch = (left, right, target) => {
    let middle = Math.floor(((left + right)/2));

    if(left === right && target !== longArr[middle]) {
      return;
    }

    if (target === longArr[middle]) {
      results.push(target);
    } else if (target < longArr[middle]) {
      right  = middle - 1;
      binarySearch(left, right, target);
    } else {
      left = middle + 1;
      binarySearch(left, right, target);
    }
  }

  for (let i = 0; i < shortArr.length; i++) {
    binarySearch(0, longArr.length, shortArr[i]);
  }
  return results;
}
