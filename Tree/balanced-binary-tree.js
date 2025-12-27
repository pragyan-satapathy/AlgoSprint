// https://leetcode.com/problems/balanced-binary-tree/description/

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

var isBalanced = function(root) {
    let ans = true;
    let calculateHeight = (curr) => {
        if(!curr) return 0;
        let leftHeight = calculateHeight(curr.left);
        let rightHeight = calculateHeight(curr.right);
        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calculateHeight(root);
    return ans;
};
     