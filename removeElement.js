/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length = nums.length;
    let remove = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            remove++;
        }
    }

    return length - remove;
};
