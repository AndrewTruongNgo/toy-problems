/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSortedArray = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = i + j + 1;

    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
};
