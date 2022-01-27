// https://leetcode.com/problems/path-sum-ii/

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
    List<List<Integer>> result = new ArrayList<>();
    
    public void _pathSum(TreeNode current, int targetSum, int sum, List<Integer> values) {
        if (current.left == null && current.right == null) {
            if (sum + current.val == targetSum) {
                values.add(current.val);
                this.result.add(new ArrayList<>(values));
                values.remove(values.size() - 1);
            }
            return;
        }
        
        values.add(current.val);
        
        if (current.left != null) {
            _pathSum(current.left, targetSum, sum + current.val, values);
        }
        
        if (current.right != null) {
            _pathSum(current.right, targetSum, sum + current.val, values);
        }
        
        values.remove(values.size() - 1);
    }
    
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        if (root == null) return this.result;
        _pathSum(root, targetSum, 0, new ArrayList<>());
        return this.result;
    }
}
