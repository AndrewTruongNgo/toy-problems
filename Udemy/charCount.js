let charCount = (string) => {
  let results = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (results[char] > 0 && typeof char === 'string' || typeof char === 'number') {
      results[char]++;
    } else if (typeof char === 'string' || typeof char === 'number') {
      results[char] = 1;
    }
  }
  return results;
}

charCount('hello');
charCount('Hello! user brandheard123');
