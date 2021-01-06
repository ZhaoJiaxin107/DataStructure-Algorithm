/*
226. Invert Binary Tree
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

// 先翻转左右子树, 再将子树换个位置
// 符合 "分, 解, 合"特性

// 先翻转左右子树, 再将子树换个位置
// 符合"分、解、合" 特性
// 考虑选择分而治之

// 分: 获取左右子树
// 解: 递归地翻转左右子树
// 合: 将翻转后的左右子树换个位置放到根节点上

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) { return null; }
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left)
    }
};
// 时间复杂度: 树的每一个节点都访问到了, O(n)
// 空间复杂度: O(h) h为树的高度 h最坏的情况下为O(n)
