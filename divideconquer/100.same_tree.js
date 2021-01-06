/* 
100. Same Tree
Given the roots of two binary trees p and q, write a function to check 
if they are the same or not.

Two binary trees are considered the same if they are structurally 
identical, and the nodes have the same value.
*/
// 1.两个树: 根节点的值相同, 左子树相同, 右子树相同
// 2.符合 分、解、合的特性
// 3.考虑分而治之

// 分: 获取两个树的左子树和右子树
// 解: 递归地判断两个树的左子树和右子树是否相同
// 合：将上述结果合并, 如果根节点的值也相同, 树就相同
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (p && q && p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    ) {
        return true;
    }
    return false;
};
// 时间复杂度: O(n) n为树的节点数
// 空间复杂度: 最好 O(logN) 最坏O(NS)