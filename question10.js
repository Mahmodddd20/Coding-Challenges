function minPath(grid, startX, startY, endX, endY) {
    if (startX > endX || startY > endY) {
        return Infinity;

    }
    if (startX == endX && startY == endY) {
        return grid[startX][startY];

    }
    return grid[startX][startY] +
        Math.min(
            minPath(grid, startX + 1, startY, endX, endY),
            minPath(grid, startX, startY + 1, endX, endY));
}

function minPathSum(grid) {
    const gridY = grid.length;
    const gridX = grid[0].length;
    const endX = gridY - 1;
    const endY = gridX - 1;

    return minPath(grid, 0, 0, endX, endY);

}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));
