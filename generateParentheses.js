let generateParentheses = (n) => {
  let results = [];

  if (n === 0) {
    return results;
  }

  let helper = (open, close, currStr) => {
    console.log(currStr, open, close)
    if (open === 0 && close === 0) {
      results.push(currStr);
      // return;
    }

    if (open > close) {
      return;
    }

    if (open >= 1) {
      helper(open - 1, close, currStr + '(');
    }

    if (close >= 1) {
      helper(open, close - 1, currStr + ')');
    }
    // return;
  }

  helper(n, n, '');
  return results;
}

generateParentheses(3);
