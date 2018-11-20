let flipGame = (str) => {
  str = str.split('');
  if (str.length < 2) {
    return [];
  }

  let results = [];

  //Not working in console

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' && str[i + 1] === '+') {
      str[i] = '-';
      str[i + 1] = '-';
      results.push(str);
      str[i] = '+';
      str[i + 1] = '+';
    }
    if (str[i] === '-' && str[i + 1] === '-') {
      str[i] = '+';
      str[i + 1] = '+';
      results.push(str);
      str[i] = '-';
      str[i + 1] = '-';
    }
  }
  return results;
}

flipGame('----')
