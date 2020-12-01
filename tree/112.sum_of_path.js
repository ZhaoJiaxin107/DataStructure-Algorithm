/* 
    112. Path Sum
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

// 在深度优先遍历的过程中, 记录当前路径节点值的和
// 在叶子节点处, 判断当前路径的节点值的和是否等于目标值

// 深度优先遍历二叉树, 在叶子节点处, 判断当前路径的节点值的和
// 是否等于目标值, 是就返回true
// 遍历结束, 如果没有匹配, 就返回false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    let res = false;
    const dfs = (n, s) =>{
        //console.log(n.val, s);
        if(!n.left && !n.right && s === sum){
            res = true;
        }
        if(n.left) dfs(n.left,s + n.left.val);
        if(n.right) dfs(n.right,s + n.right.val);
    };
    dfs(root, root.val);
    return res;
};

// 时间复杂度: O(n) 遍历了所有的节点
// 空间复杂度: 递归调用函数调用堆栈  O(n), n为递归调用堆栈的高度, 树的高度
// 最坏情况O(n), 最好情况O(logN)