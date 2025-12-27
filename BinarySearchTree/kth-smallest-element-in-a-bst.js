// https://leetcode.com/problems/kth-smallest-element-in-a-bst/


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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let res = null
    count = k

    function traversal(curr) {
        
        curr.left && traversal(curr.left)
        count -= 1
        if (count == 0) {
            res = curr.val
        }
        curr.right && traversal(curr.right)
    }
    traversal(root)
    return res
};