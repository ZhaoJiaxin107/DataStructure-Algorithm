/*
    You are a professional robber planning to rob houses along a street.
    Each house has a certain amount of money stashed, the only constraint
    stopping you from robbing each of them is that adjacent houses have
    security system connected and it will automatically contact the police
    if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money
    of each house, determine the maximum amount of money you can rob
    tonight without alerting the police.
*/

/* 
解题思路

f(k) = 从前k个房屋能偷窃到的最大数额

Ak = 第k个房屋的钱数

f(k) = max(f(k-2)+Ak, f(k-1))

考虑使用动态规划

*/
// 1.定义子问题 f(k) = max(f(k-2)+Ak, f(k-1))
// 2.反复执行: 从2循环到n, 执行上述公式

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) { return 0; }
    const dp = [0, nums[0]];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    }
    console.log(dp)
    return dp[dp.length - 1]
};

// 时间复杂度: O(n) n为nums的长度
// 空间复杂度: O(n)  n为dp的长度

var rob = function (nums) {
    if (nums.length === 0) { return 0; }
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        const dp2 = Math.max(dp0 + nums[i - 1], dp1);
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp1
};
// 时间复杂度：O(n),空间复杂度:O(1)
