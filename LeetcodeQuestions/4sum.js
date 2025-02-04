// Sum of 4 with the bute

function sumOfFour(nums, target) {
  let n = nums.length;
  let sum = 0;
  let set = new Set();

  // let loop through four times to check if we get the values
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          sum = nums[i] + nums[j];
          sum += nums[k];
          sum += nums[l];
          if (sum === target) {
            let temp = [nums[i], nums[j], nums[k], nums[l]];
            temp.sort((a, b) => a - b);
            set.add(temp.join(","));
            console.log(set, "---");
          }
        }
      }
    }
  }

  let result = Array.from(set).map((item) => item.split(",").map(Number));
  return result;
}

//console.log(sumOfFour([1, 0, -1, 0, -2, 2], 0));
// console.log(sumOfFour([2, 2, 2, 2, 2], 8));

function sumOfFourBetter(nums, target) {
  let n = nums.length;
  let sum = 0;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temSet = new Set();
      for (let k = j; k < n; k++) {
        sum = nums[i] + nums[j];
        sum += nums[k];
        let fourth = target - sum;
        if (temSet.has(fourth)) {
          let tempArray = [nums[i], nums[j], nums[k], fourth];
          tempArray.sort((a, b) => a - b);
          set.add(tempArray.join(","));
        }
        temSet.add(fourth);
      }
    }
  }

  let result = Array.from(set).map((item) => item.split(",").map(Number));
  return result;
}

// console.log(sumOfFourBetter([1, 0, -1, 0, -2, 2], 0));
// console.log(sumOfFourBetter([2, 2, 2, 2, 2], 8))
//console.log(sumOfFourBetter([1, 0, -1, 0, -2, 2], 0));

function sumOfFourOptimal(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];

  // we need the next three values in the target
  for (let i = 0; i < nums.length - 3; i++) {
    // let skip the same value word
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // let loop to find unique third value
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let begin = j + 1;
      let end = nums.length - 1;
      while (begin < end) {
        let sum = nums[i] + nums[j] + nums[begin] + nums[end];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[begin], nums[end]]);
          // we got the the first array we have to check for the duplicates for the las two values also
          while (begin < end && nums[begin] === nums[begin + 1]) {
            begin++;
          }

          while (begin < end && nums[end] === nums[end - 1]) {
            end--;
          }
          begin++;
          end--;
        } else if (sum < target) {
          begin++;
        } else {
          end--;
        }
      }
    }

    // now we will find the unique last two digit to solve
  }
  return res;
}

console.log(sumOfFourOptimal([1, 0, -1, 0, -2, 2], 0));
// [-2,-1,0,0,1,2]
