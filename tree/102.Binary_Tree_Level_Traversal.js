/* 
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
// 层序遍历就是广度优先遍历
// 不过在遍历的时候需要记录当前节点所处的层级, 方便将其添加到不同的数组中

/* 
    1.广度优先遍历二叉树
    2.遍历过程中, 记录每个节点的层级, 并将其添加到不同的数组中
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const q = [[root,0]];
    const res = [];
    while(q.length){
        const [n, level] = q.shift();
        // console.log(n.val, level);
        if(!res[level]){
            res.push([n.val]);
        }else{
            res[level].push(n.val);
        }
        if(n.left) q.push([n.left, level+1]);
        if(n.right) q.push([n.right, level + 1]);
    }
    return res;
};

var levelOrder = function(root) {
    if(!root) return [];
    const q = [root];
    const res = [];
    while(q.length){
        let len = q.length;
        res.push([]);
        while(len--){
            const n = q.shift();
            // console.log(n.val, level);
            res[res.length-1].push(n.val);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
    }
    return res;
};

// 时间复杂度 O(n),n为树的节点数
// 空间复杂度 线性增长 O(n)