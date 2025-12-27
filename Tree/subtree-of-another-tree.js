// https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isSameTree(root, subRoot) {
    if(!root && !subRoot) return true
    if (!root || !subRoot) return false
    return (root.val === subRoot.val) && isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
}
var isSubtree = function(root, subRoot) {
    if (!root) return false
    if(isSameTree(root, subRoot)) return true
    let ans = isSubtree(root.left, subRoot)
    let ans1 =  isSubtree(root.right, subRoot)
    return ans || ans1
};