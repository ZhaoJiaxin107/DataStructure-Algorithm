class Solution {
    List<Integer> list = new ArrayList<>();
    
    public List<Integer> preorderTraversal(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        
        while(!stack.empty()){
            if (root == null) return list;
            TreeNode node = stack.pop();
            list.add(node.val);
            
            if(node.right!= null) stack.push(node.right);
            if(node.left !=null) stack.push(node.left);
        }
        return list;
    }
}