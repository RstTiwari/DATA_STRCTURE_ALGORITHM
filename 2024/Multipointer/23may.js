// i will consider this as an sorted Array
function sumOfZero(array, target) {
    let left = 0;
    let right = 0;
    let sum = array[left];
    while (right < array.length) {
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            right++;
            if (right <= array.length) {
                sum += array[right];
            }
        } else {
            sum -= array[left];
            left++;
        }
    }
}

console.log(sumOfZero([3, 2, 3], 6));
/**
 * 1 =>                lr                   sum 3 != 6
 * 2 =>                l   r                sum  5 != 6 
 * 3 =>                l      r            sum  44 != 5
 * 4 =.    l               r         sum 6 !== 5
 *  5=>       l            r         sum 
 
 */
