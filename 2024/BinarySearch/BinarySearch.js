function bianarySearch(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let m = Math.floor((e + s) / 2);

    while (nums[m] !== target) {
        console.log(s, e, m);
        if (nums[m] < target) {
            e = m - 1;
        } else {
            s = m + 1;
        }

        m = Math.floor((e + s) / 2);
    }
    return m;
}

console.log(bianarySearch([1, 2, 3, 4, 5, 8, 9], 5));

//  [1, 2, 3, 4, 5, 8, 9]
//   s        m        e
// if nums[m] < target
//   e = m -1
//  [1, 2, 3, 4, 5, 8, 9]
//   s     e

function medianOfTwoSortedArray(num1, num2) {
    let sortedArray = [];
    let left = 0;
    let right = 0;
    while (left < num1.length && right < num2.length) {
        if (num1[left] <= num2[right]) {
            sortedArray.push(num1[left]);
            left++;
        } else {
            sortedArray.push(num2[right]);
            right++;
        }
    }

    // if there is remainig element in num 1 add them to sortedArray
    while (left < num1.length) {
        sortedArray.push(num1[left]);
        left++;
    }

    // if there is anything remaning in the num2 add it to sortedArray

    while (right < num2.length) {
        sortedArray.push(num2[right]);
        right++;
    }

    let median;
    let n = sortedArray.length;
    if (n % 2 === 0) {
        median =
            (sortedArray[Math.floor((n - 1) / 2)] +
                sortedArray[Math.floor(n / 2)]) /
            2;
    } else {
        median = sortedArray[Math.floor(n / 2)];
    }
    console.log(sortedArray);
    return median;
}

console.log(medianOfTwoSortedArray([1, 2, 5, 15, 18], [2, 3, 6, 9, 10]));
// take the the second num put it first nums by binary Search logic
// then take median of the first array
