/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

// 爬到第n阶可以在第(n-1)阶爬一个台阶, 或者在第(n-2)阶爬2个台阶
// F(n) = F(n-1) + F(n-2)
// 使用动态规划

// 定义子问题: F(n) = F(n - 1) + F(n - 2)
// 反复执行: 从2循环到n, 重复上述公式

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n < 2) { return 1;}
    const dp = [1, 1];
    for(let i = 2; i <=n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    //console.log(dp);
    return dp[n];
};

// 时间复杂度: O(n)
// 空间复杂度: 创建了数组O(n)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n < 2) { return 1;}
    let dp0 = 1;
    let dp1 = 1;
    for(let i = 2; i <=n; i++){
        const temp = dp0;
        dp0 = dp1;
        dp1 = temp + dp0;
    }
    //console.log(dp);
    return dp1;
};
// 时间复杂度: O(n)
// 空间复杂度: O(1)

