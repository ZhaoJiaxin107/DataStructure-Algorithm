/**
 * 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */
// 解题思路: 把nums想象成相亲者
// 把target想象成匹配条件
// 用字典建立一个婚姻介绍所, 存储相亲者的数字下标

// 解题步骤
// 新建一个字典作为婚姻介绍所
// nums里的值, 逐个来介绍所找对象, 没有合适的就先登记着, 有合适的就牵手成功

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0;i<nums.length;i++){
        const n = nums[i];
        const n2 = target - n;
        if(map.has(n2)){
            return [map.get(n2),i];
        }else{
            map.set(n,i);
        }
    }
};


