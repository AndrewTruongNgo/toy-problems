/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = [];

    while(left < right) {
        let sum = numbers[left] + numbers[right];

        if (target === sum) {
            left++;
            right++;
            result.push(left, right);
            break;
        } else if (target > sum) {
            left++;
        } else {
            right--;
        }
    }

    return result;

};
