/*
46. Permutations
Given an array nums of distinct integers, return all
the possible permutations. You can return the answer in any order.
*/

// 1.所有排列情况
// 2.没有重复元素
// 3.有出路，有死路，考虑回溯算法

/* 
1.递归模拟所有情况
2.遇到包含重复元素的情况，就回溯
3.收集所有到达递归终点的情况，并返回
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path);
            return
        }
        nums.forEach(n => {
            if (path.includes(n)) { return; }
            backtrack(path.concat(n))
        })

    }
    backtrack([])
    return res;
};
 
// 时间复杂度: O(n!) 
// 空间复杂度: O(n) 递归的层数
// 递归的本质是堆栈
