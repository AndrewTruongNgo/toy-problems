/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    let isValid = false;

    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            let diff = i - map[nums[i]];
            if (diff <= k) {
                isValid = true;;
            } else {
                map[nums[i]] = i;
            }
        }
    }
    return isValid;
};
