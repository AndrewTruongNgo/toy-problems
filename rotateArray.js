/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

let count = 0;

while(count < k) {
  let curr = nums.pop();
  nums.unshift(curr);
  count++;
}

return nums;

};
