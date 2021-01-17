/* 
    解题思路：
    1.局部最优：既能满足孩子，还消耗最少
    2.先将"较小的饼干"分给"胃口最小"的孩子
*/

/* 
    解题步骤:
    1.对饼干数组和胃口数组进行升序排序
    2.遍历饼干数组, 找到能满足第一个孩子的饼干
    3.然后继续遍历饼干数组, 找到满足第二、三、...n个孩子的饼干
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    const sortFunc = function (a, b) {
        return a - b;
    }
    g.sort(sortFunc);
    s.sort(sortFunc);
    let i = 0;
    s.forEach(n => {
        if (n >= g[i]) {
            i++;
        }
    });
    return i;
};

// 排序时间复杂度: O(n) * O(logN) O(n)
// 时间复杂度: O(n) * O(logN)
// 空间复杂度: O(1)