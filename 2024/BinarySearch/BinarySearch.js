function bianarySearch(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let m = Math.floor((e + s) / 2);

    while (nums[m] !== target) {
        if (nums[m] < target) {
            e = m - 1;
        } else {
            s = m + 1;
        }

        m = Math.floor((e + s) / 2);
    }
    return m;
}

//console.log(bianarySearch([1, 2, 3, 4, 5, 8, 9], 5));



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

//console.log(medianOfTwoSortedArray([1,2], [3,4]))


// take the the second num put it first nums by binary Search logic
// then take median of the first array

//4. Find First and Last Position of Element in Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Write Fucntion to check start side 
    let output  =[-1,-1]
    let start = 0
    while(start < nums.length){
        if(nums[start] === target){
            output[0] = start
            break;
        }
        start += 1
    }

    // Wrtie a fucntion to check form the back side
    let end = nums.length -1
    while (end > 0){

        if(nums[end] === target){
            output[1] = end
            break;
        }
        end -= 1
    }
    return output
    
};

console.log(searchRange([1,2,3,4,5,5,9],5))