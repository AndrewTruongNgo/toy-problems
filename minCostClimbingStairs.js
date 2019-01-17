/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let l = cost.length;
    let arr = new Array(l).fill(0);
    arr[0] = cost[0];
    arr[1] = cost[1];

    if (l < 3) return 0;

    for (let i = 2; i < l; i++) {
        arr[i] = Math.min(arr[i - 1], arr[i - 2]) + cost[i];
    }
    console.log(arr)
    return Math.min(arr[l - 1], arr[l - 2]);

};

minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
