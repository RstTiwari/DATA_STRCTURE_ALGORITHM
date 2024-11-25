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
console.log(sumOfFourBetter([1, 0, -1, 0, -2, 2],0));