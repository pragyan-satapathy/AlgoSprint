// https://leetcode.com/problems/path-sum/submissions/1888693883/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let isFound = false
    if (!root){
        return false
    }
    function func(root, targetSum) {
        // first check it is a leaf node or not. If a leaf node and its val = targetSum, then we found the ans
        if (!root.left && !root.right && root.val === targetSum) {
            isFound = true
        }
        if (!isFound) {
            // if not found, then deduct root.val to get new targetSum, and check if it is present is subtree
            root.left && func(root.left, targetSum - root.val)
            root.right && func(root.right, targetSum - root.val)
        }
    }
    func(root, targetSum)
    return isFound
};