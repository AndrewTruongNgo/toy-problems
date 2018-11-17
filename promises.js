let firstFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hi my name is '), 2000);
  });
}

let secondFunction = (dataFromFirst) => {
  return new Promise((resolve, reject) => {
    resolve(dataFromFirst + 'Andrew')
  })
}

firstFunction().then((data) => {
  return secondFunction(data);
}).then((data) => {
  console.log(data);
})






let test = (data) => {
  return new Promise((resolve, reject) => {
    let results = data * 10
    if (typeof results === 'number') {
      // Whatever that's in resolve will be 'data' in .then argument
      resolve(results)
    } else {
      reject(results)
    }
  })
}

test(9).then((data) => console.log(data, 'success!'))
.catch(() => console.log('nah fam'))
