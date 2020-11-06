// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * 解题思路：用集合对nums1去重
 * 遍历nums1, 筛选出nums2也包含的值
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // return [...new Set(nums1)].filter( n => new Set(num2).has(n));
    return [...new Set(nums1)].filter(n=>nums2.includes(n));
};

