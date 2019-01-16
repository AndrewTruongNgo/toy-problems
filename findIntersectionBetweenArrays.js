/*
I: let arr1 = [1,2,3,4,5,6];
let arr2 = [2,5,7,8];
let arr3 = [1,2,7,9,10];


O: [2,7]
*/

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [2,5,7,8];
let arr3 = [1,2,7,9,10];

function findIntersectionBetweenArrays (arr1, arr2, arr3) {
  let results = [];
  let x = 0;
  let y = 0;
  let z = 0;

  for(let i = 0; i < arr1.length; i++) {
    x = arr1[i];
    while(arr1[x] > arr2[y]) {
      y++;
    }

    while(arr1[x] > arr3[z]) {
      z++;
    }

    if (arr1[x] === arr2[y] && arr1[x] === arr3[z]) {
      results.push(arr1[x]);
    }

  }

  return results;
}


findIntersectionBetweenArrays(arr1, arr2, arr3);
