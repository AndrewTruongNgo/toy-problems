/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) {
     return null;
 }

 let total = -Infinity;
 let max = -Infinity;

 for (let i = 0; i < nums.length; i++) {

     if(total < 0) {
         total = 0;
     }

     total += nums[i];

     if(total > max) {
         max = total;
     }

 }
 return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
