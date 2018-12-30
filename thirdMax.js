/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxNum = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    let changed = false;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > second && nums[i] < maxNum) {
            second = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > third && nums[i] < second) {
            third = nums[i];
            changed = true;
        }
    }

    if (!changed) return maxNum;

    return third;
};
