/* 
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

*/

// 1.求最大深度, 考虑使用深度优先遍历
// 2.在深度优先遍历过程中, 记录每个节点所在层级, 找出最大层级即可
/* 
1. 新建一个变量, 记录最大深度
2. 深度优先遍历整棵树, 并记录每个节点的层级, 同时不断刷新最大深度这个变量
3. 遍历结束后返回最大深度这个变量
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, l) {
    let res = 0;
    const dfs = (n, l) => {
        if(!n) { return; }
        if(!n.left && !n.right){
            res = Math.max(res, l);
        }
        dfs(n.left, l+1);
        dfs(n.right,l+1);
    };
    dfs(root, 1);
    return res;
};

// 时间复杂度: O(n), n为节点的个数
// 空间复杂度：O(n), 为节点个数, O(logn) 二叉树均匀分布
