/*
122. Best Time to Buy and Sell Stock II
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/

// 前提: 上帝视角，知道未来的价格
// 局部最优: 见好就收, 见差就不动，不做任何长远打算

// 新建一个变量，用来统计总利润
// 遍历价格数组，如果当前价格比昨天高，就在昨天买
// 今天卖，否则就不交易

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
// 时间复杂度 O(n)
// 空间复杂度 O(1)