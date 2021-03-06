function getMinimumUniqueSum (arr) {

  let merge = (arr1, arr2) => {
   let i = 0;
   let j = 0;
   let results = [];

   while (i < arr1.length && j < arr2.length) {
     if (arr1[i] > arr2[j]) {
       results.push(arr2[j]);
        j++;
      } else {
         results.push(arr1[i]);
         i++;
       }
     }

    while( i < arr1.length) {
      results.push(arr1[i]);
      i++;
     }

   while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
    }

   return results;
  }

  let mergeSort = (arr) => {
   if (arr.length <= 1) {
     return arr;
    }

   let middle = Math.floor(arr.length / 2);
   let left = mergeSort(arr.slice(0, middle));
   let right = mergeSort(arr.slice(middle));

   return merge(left, right);
  }

  mergeSort(arr);

   for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let prev = arr[i -1];

    if (curr < prev || curr === prev) {
      arr[i] = prev + 1;
    }
   }

   return arr;
}

getMinimumUniqueSum([1, 2, 4, 4, 4, 5]);
