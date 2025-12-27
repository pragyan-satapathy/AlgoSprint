// https://leetcode.com/problems/validate-binary-search-tree/

//top down
// ========




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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let res = true
    function traverse(curr, lo = null, hi = null) {
        if(lo || lo == 0) {
            if(curr.val <= lo) {res = false}
        } 
        if(hi || hi == 0) {
            if(curr.val >= hi) {res = false}
        } 
        curr.left && traverse(curr.left, lo, curr.val)
        curr.right && traverse(curr.right, curr.val, hi)
    }
    traverse(root)
    return res
};




// bottom up
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
 * @return {boolean}
 */
var isValidBST = function(root, lo = null, hi = null) {
    if (!root) return true

    if((lo != null && root.val <= lo) || (hi != null && root.val >= hi)) return false
    const left = isValidBST(root.left, lo, root.val)
    const right = isValidBST(root.right, root.val, hi)

    return left && right
};