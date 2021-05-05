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
