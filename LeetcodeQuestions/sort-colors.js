function bruteForceApproch(array) {
  return array.sort((a, b) => a - b);
}

// O(nlog(n))
// o(n)   // as creating new error
console.log(bruteForceApproch([2, 0, 2, 1, 1, 0]));

function betterApproch(arr) {
  let map = new Map();
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  // now mapping over the first value as zero
  for (let i = 0; i < map.get(0); i++) {
    arr[i] = 0;
  }
  for (let i = map.get(0); i < map.get(0) + map.get(1); i++) {
    arr[i] = 1;
  }

  for (let i = map.get(0) + map.get(1); i < n; i++) {
    arr[i] = 2;
  }
  return arr;
}

// o(2N)
// o(0)
//console.log(betterApproch([2, 0,,2,2, 2, 1, 1, 0,1,0,2,0,1,0,2,1,0,2,0]));

function optimal(arr) {
  let begin = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 0) {
      [arr[begin], arr[mid]] = [arr[mid], arr[begin]];
      begin++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[end]] = [arr[end], arr[mid]];
      end--;
    } else {
      mid++;
    }
  }

  return arr;
}
console.log(
  optimal([2, 0, , 2, 2, 2, 1, 1, 0, 1, 0, 2, 0, 1, 0, 2, 1, 0, 2, 0])
);
console.log("---");
