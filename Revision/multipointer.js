/***It work ony for adjus  array value */

function toSumByMultiPointer(arr, tar) {
    let left = 0;
    let right = 0;
    let sum = arr[left];
    while (right < arr.length) {
        if (tar === sum) {
            return [arr[left], arr[right]];
        } else if (sum < tar) {
            right++;
            if (right < arr.length) {
                sum += arr[right];
            }
        } else {
            sum -= arr[left];
            left++;
            if (left > right) {
                right = left;
                sum = arr[left];
            }
        }
    }
    return null;
}
console.log(toSumByMultiPointer([3, 2, 3, 41, 3, 3], 5));

function arraySumOfTargetValue(array, target) {
    let left = 0;
    let right = 0;
    let sum = array[left];
    while (right < array.length) {
        if (sum === target) {
            return [array[left], array[right]];
        } else if (sum < target) {
            right++;
            if (right < array.length) {
                sum += array[right];
            }
        } else {
            sum -= array[left];
            left++;
            if (left > right) {
            }
        }
    }
}
console.log(arraySumOfTargetValue([3, 1, 3, 41, 2, 3], 5));
//0                 l = 3 r = 3 sum = 3
//1                 l = 3 r = 1  sum = 4
//2                 l = 3  r = 3  sum  = 7
// 3                l = 1  r = 3  sum  = 4
//  4               l = 1   r = 41   sum  = 45
// 5                l = 3    r = 41   sum = 44 ;
// 6                l  = 41  r = 41  sum = 41
//7                  l = 2    r   = 41  sum = 0
// 8                 l = 2     r = 2     sum  = 2
//  9                l = 2     r = 3    sum = 5
// 10                 return [2,3]

function removeDuplicateValues(array) {
    if (array.length < 1) return 0;
    let left = 0;
    let right = 1;
    while (right < array.length - 1) {
        if (array[left] !== array[right]) {
            array[left] = array[right];
            left++;
        }

        right++;
    }
    return left;
}

console.log(removeDuplicateValues([3, 4, 5, 5, 6, 6, 7, 9, 9]));
// initials       left 3  r= 4
// 1            l = 3  r = 5 ;
// 2            l  =
