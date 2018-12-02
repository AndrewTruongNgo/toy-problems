/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = [];

    if (nums.length < 3) {
        return results;
    }

    nums.sort((a,b) => a - b);

    for (let i = 0; i <= nums.length - 3; i++) {
        // if (nums[i] > 0) break;
        let start = i + 1;
        let end = nums.length -1;
        let comp = 0 - nums[i];
        while(start < end) {
            if (nums[start] + nums[end] < comp) {
                start++;
            } else if (nums[start] + nums[end] > comp) {
                end--;
            } else {
                results.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
            }
        }
    }
    return results;
};
