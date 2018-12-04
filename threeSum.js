/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let threeSum = (nums) => {
  let results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) return results;
      if (nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;
      let comp = 0 - nums[i];
      while (left < right) {

        if (nums[i] + nums[left] + nums[right] === 0) {
          results.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
        }
        if (nums[left] + nums[right] < comp) {
          left++;
        } else {
          right--;
        }
      }
  }
  return results;
}

threeSum([-1, 0, 1, 2, -1, -4]);
