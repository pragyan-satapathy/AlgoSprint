// https://leetcode.com/problems/count-complete-tree-nodes/description/?envType=problem-list-v2&envId=binary-tree

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
 * @return {number}
 */

function countLeftNode(root) {
    if (!root) return 0
    return countLeftNode(root.left)+1
}

function countRightNode(root) {
    if (!root) return 0
    return countRightNode(root.right)+1
}

var countNodes = function(root) {
    const left = countLeftNode(root)
    const right = countRightNode(root)

    // if left == right, means all leaf nodes present
    if (left === right) {
        return (2**left) - 1
    }
    // adding 1, because that is the count for root
    return 1+countNodes(root.left) +countNodes(root.right)
};