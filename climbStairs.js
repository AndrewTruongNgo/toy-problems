const climbStairs = n => {
    // we know that 3 steps returns 3
    if (n <= 3) return n;
    let arr = [1,2,3];
    for (let i = 3; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
}

climbStairs(7)
