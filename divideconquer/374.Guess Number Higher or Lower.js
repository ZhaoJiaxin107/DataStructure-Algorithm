/*
374. Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked.
*/

// 二分搜索, 同样具备"分、解、合"的特性
// 考虑选择分而治之

// 分: 计算中间元素, 分割数组
// 解: 递归地在较大或者较小子数组中进行二分搜索
// 合: 不需要此步, 因为在子数组中搜到就返回了

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const rec = (low, high) => {
        if(low > high) {return;}
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        if(res === 0){
            return mid;
        }else if(res === 1){
            // pick > num
            return rec(mid+1, high)
        }else if(res === -1){
            // pick < num
            return rec(low, mid - 1)
        }
        
    }
    return rec(1, n);
};

// 时间复杂度: O(logN), 每次缩小了一半的范围
// 空间复杂度: O(logN) 递归
