let minEatingSpeed = (piles, H) => {
  let start = 1;
  let end = piles.reduce((acc, val) => acc + val, 0);

  while(start <= end) {
    let K = Math.ceil((start + end) / 2);

    let newPile = piles.map((pile) => {
      return Math.ceil(pile/K);
    }).reduce((acc, val) => (acc + val), 0);

    if (newPile <= H) {
      end = K - 1;
    } else {
      start = K + 1;
    }
  }
  return start
}

minEatingSpeed([332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673, 679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097, 692137887, 718203285, 629455728, 941802184], 823855818)


minEatingSpeed([3,6,7,11], 8;
minEatingSpeed([4,7,8,12], 8);
