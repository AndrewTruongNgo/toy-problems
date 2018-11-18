let missingNum = (num) => {
  let storage = {};
  let numStr = num + '';

  for (let i = 0; i < numStr.length; i++) {
    if (storage[numStr[i]] === undefined) {
      storage[numStr[i]] = 1;
    } else {
      storage[numStr[i]] += 1;
    }
  }

  let keys = Object.keys(storage);
  let values = Object.values(storage);

  for (let i = 0; i < values.length; i++) {
    if (values[i] < 3) {
      return keys[i];
    }
  }

}

missingNum(11122233344455666)
