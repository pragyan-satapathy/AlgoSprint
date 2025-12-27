// https://leetcode.com/problems/binary-tree-right-side-view/submissions/1864935468/

var rightSideView = function(root) {
    let  res = []
    function level(root, l) {
        if (!root) {
            return
        }
        if (res[l] !== 0 && !res[l])  res[l] = root.val
        root.right && level(root.right, l+1) 
        root.left && level(root.left, l+1)
    }
    level(root, 0)
    return res
};
