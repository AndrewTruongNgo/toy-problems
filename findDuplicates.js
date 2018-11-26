function findDuplicates(arr1, arr2) {

  let results = [];
  let smallArr = null;
  let largeArr = null;

  if (!arr1.length || !arr2.length) {
    return results;
  }

  if (arr1.length > arr2.length) {
    smallArr = arr2;
    largeArr = arr2;
  } else {
    smallArr = arr1;
    largeArr = arr2;
  }

  let binarySearch = (arr, target) => {

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);

    while(arr[middle] !== target && start <= end) {
      if (target < arr[middle]) {
        end = middle - 1;
        middle = Math.floor((start + end)/2);
      } else {
        start = middle + 1;
        middle = Math.floor((start + end)/2);
      }

    }
    if (arr[middle] === target) {
      results.push(target);
    }
  }


  for (let i = 0; i < smallArr.length; i++) {

     binarySearch(largeArr, smallArr[i]);

  }

  return results;
}

findDuplicates([1,2,3,4,5,7],[7,8,9,10,12,14])
