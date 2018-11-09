let frequencyCounter = (arr1, arr2) => {
  let obj1 = {};
  let obj2 = {};
  let results = true;

  for (let i = 0; i < arr1.length; i++) {
    let elem = arr1[i];
    obj1[elem] = (obj1[elem] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let elem = arr2[i];
    obj2[elem] = (obj2[elem] || 0) + 1;
  }
  console.log(obj1)

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }

    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return results;

}

frequencyCounter([1, 2, 2, 3], [4, 4, 1, 9]);
