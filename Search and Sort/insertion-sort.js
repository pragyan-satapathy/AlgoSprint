// https://leetcode.com/problems/sort-an-array/
// time complexity = O(N^2)


// Insertion Sort
// Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
// It works by taking each element from the input and inserting it into its correct position in the already sorted part of the array.
// Starting from the second element, it compares the current element with the previous ones, shifting larger elements one position ahead to make space for the current element.
// This process continues until all elements are sorted.
// Insertion Sort is efficient for small or nearly sorrted datasets and operates in-place without requiring extra memory.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let flag = false
        for (let j=0; j <res.length; j++) {
            if (res[j] > nums[i]) {
                res.splice(j,0,nums[i])
                flag = true
                break
            }
        }
        if (!flag) res.push(nums[i])
    }
    return res
};