function arrayOfArrayProducts(arr) {
  let results = [];
  let total = 1;
  let prev = 1;

  if (arr.length < 2) {
    return results;
  }


  //Iterate forward
  for (let i = 0; i < arr.length; i++) {
    total *= prev;
    results[i] = total;
    prev = arr[i];
  }

  total = 1;
  prev = 1;

  //Iterate backwards
  for (let j = arr.length -1; j >= 0; j--) {
    total *= prev;
    results[j] *= total;
    prev = arr[j];
  }

  return results;
}

console.log(arrayOfArrayProducts([8, 10, 2]));


/*
0       1      2
[1*4*6, 1*2*6, 1*2*4]


[2, 3, 4, 5]
result = [1, 1*2, 1*2*3, 1*2*3*4]
[3*4*5*1, 4*5*1, 5*1, 1]


result[i] *= product
product *= curr



//Create results arr [1]
//Create product = 1
//Create total = 1
//Iterate through array
//Multiply total and product
//Store product as curr i

//Iterate arr backwards
//Create rtotal = 1
//Create rproduct = 1
//Multiply rtotal and product
//Store product as curr i

//Return results arr

*/
