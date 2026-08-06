# https://leetcode.com/problems/3sum/submissions/2094988464/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
# https://leetcode.com/problems/3sum/submissions/2094988464/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        d = {}
        nums = sorted(nums)
        for i in range(len(nums)):
            if nums[i] not in d:
                d[nums[i]] = []
            d[nums[i]].append(i)
        ans = []
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            for j in range(i+1,len(nums)):
                if j > i + 1 and nums[j] == nums[j-1]:
                    continue

                t = -(nums[i] + nums[j])
                
                if t in d:
                    for k in d[t]:
                        if k != i and k!=j and j<k:
                            ans.append([nums[i], nums[j],nums[k]])
                            break
        return ans