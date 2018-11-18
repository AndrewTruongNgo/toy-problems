// let firstFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hi my name is '), 2000);
//   });
// }
//
// let secondFunction = (dataFromFirst) => {
//   return new Promise((resolve, reject) => {
//     resolve(dataFromFirst + 'Andrew')
//   })
// }
//
// firstFunction().then((data) => {
//   return secondFunction(data);
// }).then((data) => {
//   console.log(data);
// })


// Promise and Async

let test = (num) => {

  let results = num * 90

  return new Promise((resolve, reject) => {
    if (results === 900) {
      console.log(results);
      setTimeout( () => resolve(results), 2000);
    } else {
      reject('This aint no number');
    }
  })
}

let test2 = (num2) => {
  let results = num2 / 2;
  console.log(results);
  return results;
};


//Regular Promise then and catch

// test(10).then((data) => {
//   console.log(data);
//   return data;
// })
// .then((data) => console.log(data / 900))
// .catch((err) => console.log(err));


// Async magic

let asyncTest = async() => {
  let result = await test(10);
  result2 = test2(result);
  test2(result2);
}

asyncTest();
