// https://leetcode.com/problems/path-sum-iii

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
    List<Integer> accumulators = new ArrayList<>();
    int result = 0;
    
    public void _pathSum(TreeNode current, int targetSum, int level) {
        if (current == null) {
            return;
        }
        
        // initialize level if needed
        if (this.accumulators.size() <= level) {
            this.accumulators.add(0);
        }

        // accumulate and check result
        for (int i = 0; i <= level; i++) {
            this.accumulators.set(i, this.accumulators.get(i) + current.val);
            
            if (this.accumulators.get(i) == targetSum) {
                this.result += 1;
            }
        }
        
        // recurse left and right sub-trees
        _pathSum(current.left, targetSum, level + 1);
        _pathSum(current.right, targetSum, level + 1);
        
        // cleanup current level
        for (int i = 0; i <= level; i++) {
            this.accumulators.set(i, this.accumulators.get(i) - current.val);
        }
    }
    
    public int pathSum(TreeNode root, int targetSum) {
        if (root == null) return 0;
        _pathSum(root, targetSum, 0);
        return this.result;
    }
}
