let fib = (n) => {
  if (n === 1 || n === 2) {
      return 1;
  }

  let arr = [null, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];

}

fib(100);
