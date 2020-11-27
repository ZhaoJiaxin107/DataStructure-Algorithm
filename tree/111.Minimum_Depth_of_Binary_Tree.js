/* 
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

*/

/* 求最小深度, 考虑使用广度优先遍历
    在广度优先遍历过程中, 遇到叶子节点, 停止遍历, 返回节点层级
 */

// 1. 广度优先遍历整棵树, 并记录每个节点的层级

// 2. 遇到叶子节点, 返回节点层级, 停止遍历

var minDepth = function(root) {
    if(!root) return 0;
    const q = [[root, 1]];
    while(q.length > 0){
        const [n, l] = q.shift();
        if(!n.left && !n.right){
            return l;
        }
        if(n.left) q.push([n.left, l+1]);
        if(n.right) q.push([n.right, l+1]);
    }
};

// 时间复杂度: O(n), n为树的节点数量
// 空间复杂度: O(n), n为树的节点数量