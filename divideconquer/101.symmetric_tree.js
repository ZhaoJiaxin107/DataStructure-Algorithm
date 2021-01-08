/* 
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 
*/

// 转化为左右子树是否镜像
// 分解为：树1的左子树和树2的右子树是否镜像, 
// 树1的右子树和树2的左子树是否镜像

// 符合 分、解、合 特性, 考虑分而治之

// 分：获取两个树的左子树和右子树
// 解：递归的判断树1的左子树和树2的右子树是否镜像，树1的右子树和树2的左子树是否镜像
// 合：如果上述都成立, 且根节点值也相同，两个树就是镜像

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const isMirror = (l, r) => {
        if (!l && !r) return true;
        if (l && r && l.val === r.val &&
            isMirror(l.left, r.right) &&
            isMirror(l.right, r.left)
        ) {
            return true;
        }
        return false;
    }
    return isMirror(root.left, root.right)
};

// 时间复杂度：O(n) n为树的所有节点
// 空间复杂度: O(n) n为树的高度, 树的高度在最坏的情况下 O(n) 均匀分布 O(LogN)
