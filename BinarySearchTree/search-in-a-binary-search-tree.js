// https://leetcode.com/problems/search-in-a-binary-search-tree/description/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let node = null
    function search(curr,val) {
        if (curr.val === val) {node = curr
            return node
        }
        if (val < curr.val) curr.left && search(curr.left, val)
        if (val > curr.val) curr.right && search(curr.right, val)
        
    }
    search(root,val)
    return node
};




// bottom up approach
// ==================

var searchBST = function(root, val) {
    if (!root || root.val === val) return root

    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val)
};