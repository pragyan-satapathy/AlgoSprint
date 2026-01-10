// https://leetcode.com/problems/sort-an-array/
// time complexity = O(N^2)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for(let i = nums.length-1; i>0; i--) {
        for (let j = 0; j<i; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
};