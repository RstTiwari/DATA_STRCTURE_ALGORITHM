function nextPermutation(nums) {
  let n = nums.length;
  let index = -1;

  // first intitution for
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    let reversed = reverseArray(nums, 0, n - 1);
    return reversed;
  }

  // second intituion for the
  for (let i = n - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }

  // swapping the array after index point in position
  let reversed = reverseArray(nums, index + 1, n - 1);

  return reversed;
}

function reverseArray(nums, left, right) {
  while (left <= right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
}

console.log(reverseArray([1,2,3,4,5],2 , 4))
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([1,3,2]))
