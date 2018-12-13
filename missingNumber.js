/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let expectedSum = nums.length;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        expectedSum += i;
    }

    return expectedSum - sum;
};
