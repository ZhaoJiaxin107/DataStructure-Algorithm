/*Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.*/


// 解题思路 
// 新建一个字典, 遍历nums1, 填充字典
// 遍历nums2, 遇到字典里的值就选出, 并从字典中删除

var intersection = function (nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
        map.set(n, true);
    });

    const res = [];
    nums2.forEach(n => {
        if (map.get(n)) {
            res.push(n);
            map.delete(n);
        }
    });
    return res;
}

// 时间复杂度 O(m+n) m为nums1的长度,n为nums2的长度
// 空间复杂度临时变量的内存消耗 O(m) m为nums1的长度
