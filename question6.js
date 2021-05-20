const averageBooks = (numberOfBoxes, stages) => {
    let boxes = {};
    for (let x = 0; x < numberOfBoxes; x++) {
        boxes[x] = 0;
    }
    for (let i = 0; i < stages.length; i++) {
        let start = stages[i][0] - 1;
        let end = stages[i][1];
        let numberOfBooks = stages[i][2];
        for (let z = start; z < end; z++) {
            boxes[z] += numberOfBooks;
        }

    }
    let result = 0;
    for (let a = 0; a < numberOfBoxes; a++) {
        result += boxes[a]
    }
    return result / numberOfBoxes;
}

console.log(averageBooks(3, [[1, 2, 3], [1, 3, 5]])); // output: 7
console.log(averageBooks(4, [[1, 3, 3], [2, 3, 5]])); // output: 4.75
console.log(averageBooks(5, [[1, 4, 3], [3, 5, 5]])); // output: 5.4
