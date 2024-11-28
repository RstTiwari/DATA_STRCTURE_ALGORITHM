function setMatrixZero(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, i, j, m, n);
        markCol(matrix, i, j, m, n);
      }
    }
  }

  // now let's remark them as an zero again
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function markRow(matrix, i, j, m, n) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}
function markCol(matrix, i, j, m, n) {
  for (let i = 0; i < m; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

//console.log(setMatrixZero([[-1], [2], [3]]));

// console.log(
//   setMatrixZero([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

function setMatrixOptimal(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = Array.from({ length: m }, () => 0);
  let col = Array.from({ length: n }, () => 0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  // now let mark all the row and columns which has one as zero

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}
console.log(setMatrixOptimal([[-1], [2], [3]]));
console.log(
  setMatrixOptimal([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
