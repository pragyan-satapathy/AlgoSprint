// https://leetcode.com/problems/climbing-stairs/submissions/1896211604/

// top-down approach
/**
 * @param {number} n
 * @return {number}
 */
store = {}
var climbStairs = function(n) {
    if (n <= 3) {
        return n
    } 
    if (!store[n]) {
        // i/p = 5
        // you can go to stair 5, either from stair 4 or 3
        // so, distict ways to go to stair 5 is sum of distictways of stair 4 and 3
        store[n] = climbStairs(n-1) + climbStairs(n-2)
    }
    return store[n]
};