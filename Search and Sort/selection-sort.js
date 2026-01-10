// https://leetcode.com/problems/sort-an-array/
// time complexity = O(N^2)

// Selection Sort
// Selection Sort is a simple comparison-based sorting algorithm.
// It divides the array into two parts: a sorted subarray and an unsorted subarray.
// Initially, the sorted part is empty, and the unsorted part is the entire array.
// In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let [min, minInd] = [nums[i], i]
        for (let j=i; j <nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j]
                minInd = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[minInd]
        nums[minInd] = temp
    }
    return nums
};