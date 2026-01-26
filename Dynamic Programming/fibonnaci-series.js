// top-down approach
// memoization

// https://leetcode.com/problems/fibonacci-number/submissions/1876627209/
/**
 * @param {number} n
 * @return {number}
 */

let store = {}
var fib = function(n) {
    if (n <= 1) return n

    // if result was not stored earlied,store that and reuse it later 
    if (!store[n]) {
        store[n] = fib(n-1)+fib(n-2)
    }
    return store[n]
};