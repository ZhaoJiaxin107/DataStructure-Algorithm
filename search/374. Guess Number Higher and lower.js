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

/* 
    1.从数组的中间元素开始，如果元素正好是目标值，则搜索过程结束
    2.如果目标值大于或者小于中间元素，则在数组大于或者小于中间元素的那一半中查找
    3.如果目标值大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找
*/ 
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
    let low = 1;
    let high = n;
    while(low <= high){
        const mid = Math.floor((low + high)/2);
        const res = guess(mid);
        if(res === 0){
            return mid;
        }else if(res === 1){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
};

// 时间复杂度: logN
// 空间复杂度: O(1) 没有线性增长的
