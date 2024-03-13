/**
 * Writing Sum of Zero for an sorted array
 */

function sumZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left],array[right]];
        } else {
            if (sum <= 0) {
                left = left + 1;
            } else {
                right = right - 1;
            }
        }
    }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4]));
