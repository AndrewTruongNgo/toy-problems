function sudokuSolve(board) {
  // your code goes here
  //I: martix
  //O: Boolean
  let hash = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (Number(board[i][j]) > 0) {
        hash[board[i][j]] = board[i][j];
      } else {
        let candidate = 1;
        while (candidate < 10) {
         if (!hash[candidate]) {
          board[i][j] = candidate;
        } else {
          candidate++;
        }
        }
      }
    }
  }



}
