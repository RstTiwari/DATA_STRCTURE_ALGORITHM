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
