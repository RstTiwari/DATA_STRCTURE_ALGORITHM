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
            left ++
            console.log(right, "--", array);
        } 
        right ++
    }
    console.log(array);
    return array.length;
}
console.log(removeDuplicate([1, 1, 2,1,3]));
 //                             l  r
 //                                l r