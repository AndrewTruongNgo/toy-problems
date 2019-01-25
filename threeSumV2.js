/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     let results = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let start = i + 1;
        let end = nums.length - 1;
        while(start < end) {
            if (nums[i] + nums[start] + nums[end] === 0) {
                results.push([nums[i],nums[start],nums[end]]);
                while(nums[start] === nums[start + 1]) start++;
                while(nums[end] === nums[end - 1]) end--;
                start++;
                end--;
            }
        if (nums[i] + nums[start] + nums[end] < 0) start++;
        if (nums[i] + nums[start] + nums[end] > 0) end--;
        }
    }
    return results;
};
