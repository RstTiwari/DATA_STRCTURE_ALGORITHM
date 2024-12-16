function optimal1(num1, m, num2, n) {
  let left = m - 1;
  let right = 0;
  while (left >= 0 && right < n) {
    if (num1[left] >= num2[right]) {
      [num1[left], num2[right]] = [num2[right], num1[left]];
    } else {
      break;
    }
  }

  num1.sort((a, b) => a - b);
  num2.sort((a, b) => a - b);
  return [...num1, ...num2];
}

console.log(optimal1([1, 2, 3], 3, [2, 5, 6], 3));
// will not work on leet code because of other empty spots

function optimal2(num1, m, num2, n) {
  let length = m + n;
  let gap = Math.ceil(length / 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < length) {
      // left in first array and right in second array
      if (left < n && right > m) {
        swapThevalues(array1,array2,left , right - m)
      }
      // both are in the second array
      else if (left > m) {
        swapThevalues(array1,array2,left-n,right-n )
      } // both are in the first array
      else {
        swapThevalues(arr)
      }
    }
  }
}

function swapThevalues(array1, array2, ind1, ind2) {
  return ([array1[ind1], array2[ind2]] = [array2[ind1], array1[ind2]]);
}
