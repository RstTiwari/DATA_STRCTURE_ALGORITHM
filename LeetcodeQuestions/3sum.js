function threeSum(nums) {
  // need to sort the array first
  nums.sort((a, b) => a - b);
  let answer = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let begin = i + 1;
    let end = nums.length - 1;
    while (begin < end) {
      let sum = nums[i] + nums[begin] + nums[end];
      if (sum === 0) {
        answer.add([nums[i], nums[begin], nums[end]].join(","));
        // we go first value for being unique
        while (begin > end && nums[begin] === nums[begin + 1]) {
          begin++;
        }
        while (begin > end && nums[end] === nums[end - 1]) {
          end--;
        }
        begin++;
        end--;
      } else if (sum < 0) {
        begin++;
      } else {
        end--;
      }
    }
  }

  return Array.from(answer).map((item)=>item.split(",").map(Number));
}

//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));

