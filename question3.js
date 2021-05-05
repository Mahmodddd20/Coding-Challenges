// You are part of a store management team.
// Write a function that accepts an array of arrays.
// Each array element represents an order from a customer and contains
// the cost of each purchased item in that order.
// For example [[1.5, 2, 1.5], [3,4,3]]
// the first array [1.5, 2, 1.5] contains three items with different pricing in dollars.
// Print out the index of the highest order value (sum of order items).
//
// Input: [[1,2,3], [2,3,4]]
// Output: 1
// Input: [[1.5], [2, 3], [10, 1]]
// Output: 2

const findHighestOrderValue = (orders) => {

    let maxIndex = 0;
    let maxSum = 0;

    for (let i = 0; i < orders.length; i++) {
        let sum = 0;

        for (let j = 0; j < orders[i].length; j++) {
            sum += orders[i][j];
        }

        if (maxSum < sum) {
            maxSum = sum;
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(findHighestOrderValue([[1, 2, 3], [2, 3, 4]])); // output: 1
console.log(findHighestOrderValue([[1.5], [2, 3], [10, 1]])); // output: 2
