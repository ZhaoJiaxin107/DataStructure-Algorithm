/*

78. Subsets
Given an integer array nums, return all possible subsets (the power set).

The solution set must not contain duplicate subsets.

 */

// 1.用递归模拟所有情况
// 2.保证接的数字都是后面的数字
// 3.收集所有到底递归终点的情况，并返回

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const backtrack = (path, l, start) => {
        if (path.length === l) {
            res.push(path);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            backtrack(path.concat(nums[i]), l, i + 1)
        }

    }
    for (let i = 0; i <= nums.length; i++) {
        backtrack([], i, 0)
    }
    return res;
};

// 时间复杂度: O(2^n) 生成子集的个数
// 空间复杂度: O(n)