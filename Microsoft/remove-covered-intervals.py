# https://leetcode.com/problems/remove-covered-intervals/description/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
# https://leetcode.com/problems/remove-covered-intervals/submissions/2081528141/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days

class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        ans = len(intervals)
        for i in range(len(intervals)):
            for j in range(len(intervals)):
                if i!= j:
                    if intervals[i][0] >= intervals[j][0] and intervals[i][1] <= intervals[j][1]:
                        ans -= 1
                        break
        return ans




# optimized
# https://leetcode.com/problems/remove-covered-intervals/submissions/2081541268/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        [low,high] = intervals[0]
        res = 1
        for i in range(1, len(intervals)):
            if intervals[i][1]>high and intervals[i][0]>low:
                [low,high] = intervals[i]
                res += 1
        return res