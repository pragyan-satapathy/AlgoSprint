// iteration
// tabulation

// https://leetcode.com/problems/fibonacci-number/submissions/1896156025/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = [0,1]
    for (let i = 2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
};