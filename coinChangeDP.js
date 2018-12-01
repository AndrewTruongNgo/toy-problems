var coinChange = function(coins, amount) {
    let arr = new Array(amount + 1).fill(0);
    arr[0] = 1;
    coins.forEach((coin) => {
      for (let i = 0; i < arr.length; i++) {
        if (i >= coin) {
          arr[i] += arr[i - coin]
        }

      }
    })
    console.log(arr);
    return arr[amount];
};

coinChange([1,2,5], 12);
