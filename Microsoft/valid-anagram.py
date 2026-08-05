# https://leetcode.com/problems/valid-anagram/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
# https://leetcode.com/problems/valid-anagram/submissions/2094913535/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        d = {}
        for i in s:
            if i not in d:
                d[i] = 0
            d[i] += 1
        for i in t:
            if i not in d or d[i] == 0:
                return False
            d[i] -= 1
        return True
        