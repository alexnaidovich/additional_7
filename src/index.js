module.exports = function solveSudoku(matrix) {
//function solveSudoku(matrix) {
  
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (!matrix[r][c]) {
        for (let x = 1; x <= 9; x++) {
          if (iterateRC(matrix, r, c, x) && 
              iterate3x3(matrix, r, c, x)) {
            matrix[r][c] = x;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[r][c] = 0;
          } 
        }
        return false;
      }
    }
  }
  return true;
   
  function iterateRC(matrix, r, c, x) {
    for (let i = 0; i < 9; i++) {
      if (i !== r && matrix[i][c] === x || i !== c && matrix[r][i] === x) {
        return false;
      }
    }
    return true;
  }
  
  function iterate3x3(matrix, r, c, x) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== r && j !== c && matrix[Math.floor((r / 3)) * 3 + i][Math.floor((c / 3)) * 3 + j] === x) {
          return false;
        }
      }
    }
    return true;
  }
  
}
