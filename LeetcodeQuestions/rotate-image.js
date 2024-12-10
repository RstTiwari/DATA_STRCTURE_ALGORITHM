function bruteForceApproach(arr) {
  let m = arr.length;
  let n = arr[0].length;
  if (m !== n) return [];
  let matrix = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][n - i - 1] = arr[i][j];
    }
  }
  return matrix;
}

console.log(
  bruteForceApproach([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

function optimalApproach(matrix) {
  let m = matrix.length;
  // transpose of matrix
  for (let i = 0; i < m; i++) {
    for (let j = i; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  console.log(matrix)
  for (let i = 0; i < m; i++) {
    matrix[i] = matrix[i].reverse();
  }
  return matrix;
}
console.log(
  optimalApproach([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
