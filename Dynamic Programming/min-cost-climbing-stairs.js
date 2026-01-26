// https://leetcode.com/problems/min-cost-climbing-stairs/submissions/1897154054/


/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // I'm pushing 0, because top of the floor is not included in cost arr
    cost.push(0)
    let store = {}
    function func(i) {
        if (i < 2) {
            return cost[i]
        }
        // store[i-1] !== 0 
        // added this condition, bcz without this it will calculate repeatedly when the value is zero
        if (!store[i-1] && store[i-1] !== 0) {
            store[i-1] = func(i-1)
        }
        if (!store[i-2] && store[i-2] !== 0) {
            store[i-2] = func(i-2)
        }
        return cost[i]+Math.min(store[i-1], store[i-2])

    }
    return func(cost.length -1)
};