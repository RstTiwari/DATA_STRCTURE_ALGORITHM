function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(47474,1))

// function getDigit(num, i) {
//     if (i > num.length - 1) {
//         return null;
//     }
//     let stringNum = num.toString();
//     let pos = stringNum.length - 1 - i;
//     return Number(stringNum[pos]);
// }

function countDigit(num) {
    return num.toString().length;
}

function mostDigit(nums) {
    let max = 0;
    for (let num of nums) {
        max = num.toString().length;
    }
    return max;
}

function radixSort(nums) {
    // get most digit
    let maxDigit = mostDigit(nums);
    for (let k = 0; k < maxDigit; k++) {
        let digitBucket = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            console.log(digit, "==");
            // pushing the last number as per it's bucket number
            digitBucket[digit].push(nums[i]);
        }

        nums = [].concat(...digitBucket);
        console.log(nums);
    }
    return nums;
}

console.log(radixSort([332, 212, 11, 2, 22, 2222, 221, 172, 22232, 1222121]));
