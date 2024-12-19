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

//console.log(optimal1([1, 2, 3], 3, [2, 5, 6], 3));
// will not work on leet code because of other empty spots

function optimal2(num1, m, num2, n) {
  let length = m + n;
  let gap = Math.ceil(length / 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < length) {
      // left in first array and right in second array
      if (left < m && right >= n) {
        swapThevalues(num1, num2, left, right - m);
      }
      // both are in the second array
      else if (left >= m) {
        swapThevalues(num1, num2, left - m, right - m);

      } // both are in the first array
      else {
        swapThevalues(num1, num2, left, right-m);

      }
      left++, right++;
    }

    if (gap === 1) break;
    gap = Math.ceil(gap / 2);
  }
  num1 = num1.slice(0,m)
  console.log(num1)

  return [...num1, ...num2];
}

function swapThevalues(array1, array2, ind1, ind2) {
  if (array1[ind1] > array2[ind2]) {
    [array1[ind1], array2[ind2]] = [array2[ind2], array1[ind1]];
  }
}


//console.log(optimal2([1, 2, 3,0,0,0], 3, [2, 5,6], 3));


// using two pointer technique
function optimalSolutionThreeForLeetCode(nums1, m, nums2, n) {
   let p1 = m -1
   let p2 = n -1
   for(let p = m + n -1 ; p >= 0 ; p--){
      if(p2 < 0){
        break
      }

      if(p1 >= 0 && nums1[p1] > nums2[p2]){
              nums1[p] = nums1[p1]
              p1--
      }else{
         nums1[p] = nums2[p2]
         p2--
      }
   }
   return nums1
}

console.log(
  optimalSolutionThreeForLeetCode([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
