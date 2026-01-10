// https://leetcode.com/problems/sort-an-array/
// time complexity = O(N log N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor(nums.length/2)
    const l = sortArray(nums.slice(0, mid))
    const r = sortArray(nums.slice(mid, nums.length))

    return mergeTwoSortedArr(l,r)
};

function mergeTwoSortedArr(num1, num2) {
    let [i,j] = [0,0]
    let res = []
    while(i < num1.length && j<num2.length) {
        if (num1[i] < num2[j]) {
            res.push(num1[i])
            i+=1
        } else {
            res.push(num2[j])
            j+=1
        }
    }
    res.push(...num1.slice(i, num1.length))
    res.push(...num2.slice(j, num2.length))
    return res
}