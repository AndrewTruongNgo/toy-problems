let paintFence = (n, k) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return k;
  }

  if (n === 2) {
    return k + (k-1);
  }

  let results = k + (k-1);

// Not sure if this is correct algo
  for (let i = 3; i <= n; i++){
    results = results * (k-1);
  }

  return results;

}

paintFence(2, 3)
