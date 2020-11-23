/*76. Minimum Window Substring
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
*/
// 解题步骤: 1.用双指针维护一个滑动窗口
// 2.移动右指针, 找到包含T的子串, 移动左指针, 尽量减少包含T的子串的长度
// 3.循环上述过程, 找出包含T的最小子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for(let c of t){
        need.set(c, need.has(c) ? need.get(c) + 1: 1);
    }
    let needType = need.size;
    let res = '';
    while( r < s.length ){
        const c = s[r];
        if(need.has(c)){
            need.set(c,need.get(c) - 1);
            if(need.get(c) === 0) needType-=1;
        }
        while(needType === 0){
            const newRes = s.substring(l,r+1);
            if(!res || newRes.length < res.length) res = newRes;
            const c2 = s[l];
            if(need.has(c2)){
                need.set(c2,need.get(c2)+1);
                if(need.get(c2) === 1) needType+=1;
            }
            l+=1;
        }
        r++;
    }
    return res;
  };

//时间复杂度: O(m+n), m是t的长度, n是s的长度
//空间复杂度: O(m)