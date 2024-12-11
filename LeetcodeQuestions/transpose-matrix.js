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
console.log(
  betterApproach([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function () {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
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
console.log(
  betterApproach([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
