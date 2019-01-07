/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prev = -1;

    for(let i = 0; i < nums.length; i++) {
        if(prev === -1 || nums[i] > nums[prev]) {
            prev++;
            nums[prev] = nums[i];
        }
    }

    return prev + 1;
};
