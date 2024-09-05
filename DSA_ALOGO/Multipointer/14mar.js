/**
 * finiding sum of two vlaues to be equal to target value
 */

function toSum(array, target) {
    let left = 0;
    let right = 0;
    let sum = array[left];
    while (right < array.length) {
        if (sum === target) {
            return [array[left], array[right]];
        }

        /// if the current sum is less than the target move window to rigth side
        else if (sum < target) {
            right++;
            if (right < array.length) {
                sum += array[right];
            }
        } else {
            sum -= array[left];
            left++;
        }
    }
    return null;
}

console.log(toSum([12, 2, 34, 41, 3, 3], 5));
