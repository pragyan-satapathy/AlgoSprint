# https://leetcode.com/problems/validate-binary-search-tree/submissions/2095076753/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
# https://leetcode.com/problems/validate-binary-search-tree/description/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def isValid(root, lo, hi):
            if (not root):
                return True
            if (lo!=None and lo >= root.val) or (hi!=None and hi <= root.val):
                return False
            l = isValid(root.left, lo, root.val)
            r = isValid(root.right, root.val, hi)
            return l and r
        return isValid(root, None, None)