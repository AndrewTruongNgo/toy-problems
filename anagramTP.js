let words = ['cat', 'tac', 'rat', 'tar', 'apple'];

let findAnagrams = (arr) => {
  let storage = {};
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('');
    word.sort();
    word.join();
    if (storage[word] === undefined) {
      storage[word] = i;
    } else {
      let index = storage[word]
      results.push([arr[index], arr[i]]);
    }
  }
  return results;
}

findAnagrams(words);
