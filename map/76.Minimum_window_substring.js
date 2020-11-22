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