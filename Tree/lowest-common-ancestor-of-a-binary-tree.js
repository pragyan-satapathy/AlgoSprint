// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/1888684732/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var isPresent = function (root, p, res = false){
    if (!root) return res
    if (root.val == p) {
        res = true
        return res
    }
    return isPresent(root.left, p, res) || isPresent(root.right, p, res)
}
var lowestCommonAncestor = function(root, p, q) {
    // if p or q val is same as root val then it's the LCA, because other val must be in that subtree(because of constraints)
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    // if one val is in left-subtree and other in right subtree, then root is LCA
    if (
        (isPresent(root.left, p.val) && isPresent(root.right, q.val)) || 
        (isPresent(root.right, p.val) && isPresent(root.left, q.val))
    ){
        return root
    }
    return (root.left && lowestCommonAncestor(root.left,p,q)) || (root.right && lowestCommonAncestor(root.right,p,q))
};