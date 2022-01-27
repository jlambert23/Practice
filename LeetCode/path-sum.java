// https://leetcode.com/problems/path-sum

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    public boolean _hasPathSum(TreeNode current, int targetSum, int sum) {
        if (current.left == null && current.right == null) {
            return sum + current.val == targetSum;
        }
        
        boolean result = false;
        
        if (current.left != null) {
            result = _hasPathSum(current.left, targetSum, sum + current.val);
        }
        if (result) return result;
        
        if (current.right != null) {
            result = _hasPathSum(current.right, targetSum, sum + current.val);
        }
        if (result) return result;
        
        return false;
    }
    
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        return _hasPathSum(root, targetSum, 0);
    }
}
