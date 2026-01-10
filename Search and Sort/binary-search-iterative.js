// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [l,r] = [0, nums.length]
    if (!r) return -1
    while (l<=r){
        const mid = Math.floor((l+r)/2)
        if(nums[mid] === target) return mid
        nums[mid] > target ?
            r = mid - 1 :
            l = mid + 1
    }
    return -1
};