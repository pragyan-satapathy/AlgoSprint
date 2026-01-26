// https://leetcode.com/problems/climbing-stairs/submissions/1896216299/

/**
 * @param {number} n
 * @return {number}
 */
store = {}
var climbStairs = function (n) {
    // think it as fibonacci problem
    let arr = [0, 1, 2, 3]
    for (let i = 4; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
};