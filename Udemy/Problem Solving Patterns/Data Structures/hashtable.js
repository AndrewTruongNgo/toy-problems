class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let arr = this.keyMap;
    let index = this._hash(key);
    if (arr[index] === undefined) {
      arr[index] = [];
    }

    arr[index].push([key, value]);
    return this;
  }

  get(key) {
    let arr = this.keyMap;
    let index = this._hash(key);
    if (!arr[index]) {
      return undefined;
    }
    let storage = arr[index];
    for (let i = 0; i < storage.length; i++) {
      if (storage[i][0] === key) {
        return storage[i][1]
      }
    }
  }

  values() {
    let results = [];
    let arr = this.keyMap;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        for (let j = 0; j < arr[i].length; j++) {
          if (!results.includes(arr[i][j][1])) {
            results.push(arr[i][j][1]);
          }
        }
      }
    }
    return results;
  }

  keys() {
    let results = [];
    let arr = this.keyMap;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        for (let j = 0; j < arr[i].length; j++) {
          results.push(arr[i][j][0]);
        }
      }
    }
    return results;
  }


}

let ht = new HashTable(17);
ht.set('hi', 'bye');
ht.set('one', 'two');
ht.set('kool', 'aid');
ht.set('happy', 'boi');
