/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (solution[curr] !== undefined) {
            result.push(solution[curr], i);
        } else {
            let difference = target - curr;
            solution[difference] = i;
        }
    }
    return result;
};
