function bruteForceApproach(arr) {
  let n = arr.length;
  let sorted = arr.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < n; i++) {
    let start = sorted[i][0];
    let end = sorted[i][1];

    // checking if the current subArray is already in the result
    if (result.length && end <= result[result.length - 1][1]) {
      continue;
    }

    // checking for the remaining  intervals of answers
    for (let j = i + 1; j < n; j++) {
      if (end >= sorted[j][0]) {
        end = Math.max(end, sorted[j][1]);
      } else {
        break;
      }
    }
    result.push([start, end]);
  }
  return result;
}

// BigO n2

console.log(
  bruteForceApproach([
    [1, 3],
    [15, 18],
    [8, 10],
    [2, 6],
  ])
);

function optimalApproach(arr) {
  let n = arr.length;
  let sorted = arr.sort((a, b) => a[0] - b[0]);
  let result = [sorted[0]];
  // start form the second interval
  for (let i = 1; i < n; i++) {

    // the last result interval
    let last = result[result.length - 1];
    // the current interval
    let current = sorted[i];

    // if last overlap with the current
    if (last[1] >= current[0]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

console.log(
  optimalApproach([
    [1, 3],
    [15, 18],
    [8, 10],
    [2, 6],
  ])
);
