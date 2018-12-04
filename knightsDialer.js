// 123
// 456
// 789
// -0-
const MAP = {
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [3, 9, 0],
  5: [],
  6: [1, 7, 0],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
  0: [4, 6]
}

const MEMO = {
  1:{},
  2:{},
  3:{},
  4:{},
  5:{},
  6:{},
  7:{},
  8:{},
  9:{},
  0:{},
};

function knightsDialer(n) {
  return knightsDialerHelper(n, 1);
}

function knightsDialerHelper(n, start) {
  if (n === 1) {
    return 1;
  } else if (MEMO[start][n]) {
    return MEMO[start][n];
  }

  let count = 0;
  for (let newStart of MAP[start]) {
    count += knightsDialerHelper(n - 1, newStart);
  }
  MEMO[start][n] = count;
  return count;
}

// 2^60 calls to knightsDialerHelper
// what are all the possible ways I WOULD call knightsDialerHelper?
// 2^n calls being made, 10n values

// knightsDialer(1) = 1
// knightsDialer(2) = 2  16 18
// knightsDialer(3) = 5 (161, 167, 160, 181, 183)
// knightsDialer(4) =    (1616, 1616)
