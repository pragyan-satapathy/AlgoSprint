// https://leetcode.com/problems/binary-search/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // maintain two pointer method to track the indexes between which you can find the target element
    function binarySearch(nums, target, l=0, r=nums.length) {
        if (r<l) return -1
        const mid = Math.floor((l+r)/2)
        if(nums[mid] === target) {
            return mid
        }
        return (nums[mid] > target) ?
            binarySearch(nums, target, l, mid-1) :
            binarySearch(nums, target, mid+1, r)
    }
    return binarySearch(nums, target)
};