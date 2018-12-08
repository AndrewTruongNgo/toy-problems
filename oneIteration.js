function oneIteration(matrix) {

  let i = 0;
  let j = 0;
  while(i < matrix.length) {
    console.log(matrix[i][j]);
    j++;
    if(j >= matrix[i].length) {
      j = 0;
      i++
    }
  }
}

oneIteration([[1,2,3], [4,5,6], [7,8,9,10]]);
