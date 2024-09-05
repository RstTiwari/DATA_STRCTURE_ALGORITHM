/**
 * Remove duplicate number from the array

*/

function removeDuplicate(array) {
    if (array.length === 0) return 0;

    let left = 0;
    let right = 1;
    while (right < array.length) {
        if (array[left] !== array[right]) {
            array[left] = array[right];
            left++;
        }
        right++;
    }
    return left;
}
console.log(removeDuplicate([1, 1, 1, 2, 3, 4, 5, 6, 6]));
