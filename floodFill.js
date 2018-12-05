var floodFill = function(image, sr, sc, newColor) {

    let dfs = (image, row, col, newColor) => {

        if(row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
            return;
        }

        if (image[row][col] === 1) {
            image[row][col] = newColor;
        } else {
            return;
        }

        dfs(image, row + 1, col, newColor);
        dfs(image, row - 1, col, newColor);
        dfs(image, row, col + 1, newColor);
        dfs(image, row, col - 1, newColor);
    }

    dfs(image, sr, sc, newColor);
    return image;

};
