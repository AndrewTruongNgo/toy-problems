let circularArray = (arr) => {
  let map = {};
  let length = arr.length;

  if (!arr.length) {
    throw new Error('No elements exists');
  }

  for (let i = 0; i < arr.length; i++) {
    let visited = (arr[i] + i) % length;
    if (map[visited]) {
      return false;
    } else {
      map[visited] = 1;
    }
  }

  let count = 0;
  for (let val in map) {
    count += map[val];
  }

  if (count === length && map[0] === 1) {
    return true;
  } else {
    return false;
  }
}

circularArray([2, 2, -1]);
