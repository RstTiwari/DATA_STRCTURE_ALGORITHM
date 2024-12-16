/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var betterApproach = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};
// console.log(
//   betterApproach([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let transpose = Array.from({ length: n }, () => {
    return Array.from({ length: m }, () => 0);
  });
  console.log(transpose);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transpose[j][i] = matrix[i][j]; // Transpose: switch rows and columns
    }
  }
  return matrix;
};

// console.log(
//   betterApproach([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let transpose = Array.from({ length: n }, () => {
    return Array.from({ length: m }, () => 0);
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }

  return transpose;
};
