function fullPath(path) {
    let startingPoints = [];
    let endingPoints = [];
    let result = [];

    for (let i = 0; i < path.length; i++) {
        startingPoints.push(path[i].from);
        endingPoints.push(path[i].to);
    }

    for (let i = 0; i < path.length; i++) {
        if (!endingPoints.includes(path[i].from)) {
            result.push(path[i].from);
            break;
        }
    }

    for (let i = 0; i < path.length; i++) {
        if (startingPoints.includes(result[i])) {
            let indexOfPoint = startingPoints.indexOf(result[i]);
            result.push(endingPoints[indexOfPoint]);
        }
    }
    return result;

}

console.log(fullPath([
    {from: "Aleppo", to: "Montreal YUL"},
    {from: "Turkey", to: "Ibiza Airport"},
    {from: "Ibiza Airport", to: "Aleppo"},
    {from: "Beirut", to: "Turkey"}
]));
console.log(fullPath([
    {from: "Kuala Lumpur Airport", to: "Kuantan"},
    {from: "Dubai Terminal 1", to: "Dubai Terminal 2"},
    {from: "Damascus Airport", to: "Dubai Terminal 1"},
    {from: "Dubai Terminal 2", to: "Kuala Lumpur Airport"},
    {from: "Hama", to: "Damascus Airport"}
]));

