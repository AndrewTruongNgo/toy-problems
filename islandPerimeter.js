/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count += countIsland(grid, i, j);
        }
    }
    return count;

};

let countIsland = (grid, row, col) => {
    if (grid[row][col] === 0) return 0;
    let counter = 0;

    if (!grid[row + 1] || !grid[row + 1][col]) {
        counter++;
    }
    if (!grid[row - 1] || !grid[row - 1][col]) {
        counter++;
    }
    if (!grid[row][col + 1]) {
        counter++;
    }
    if (!grid[row][col - 1]) {
        counter++;
    }

    return counter;
}
