var uniquePathsWithObstacles = function(obstacleGrid) {

    let arr = new Array(obstacleGrid.length).fill(0).map(() => new Array(obstacleGrid[0].length).fill(0));

    arr[0][0] = 1;

    for (let i = 1; i < arr.length; i++) {
      if (obstacleGrid[i][0] === 1) {
        arr[i][0] = 0;
      } else {
        arr[i][0] = arr[i - 1][0];
      }
    }

    for (let j = 1; j < arr[0].length; j++) {
      if (obstacleGrid[0][j] === 1) {
        arr[0][j] = 0;
      } else {
        arr[0][j] = arr[0][j - 1];
      }
    }



    for (let i = 1; i < arr.length; i++) {
      for (let j = 1; j < arr[i].length; j++) {
        if (obstacleGrid[i][j] === 1) {
          arr[i][j] = 0;
        } else {
          arr[i][j]=arr[i-1][j]+arr[i][j-1];
        }
      }
    }

    console.log(arr);
    return arr[arr.length - 1][arr[0].length - 1]
};

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])
