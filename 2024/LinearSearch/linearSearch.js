function linearSearch(array, value) {
    if (array.length <= 0) return false;
    let start = 0;
    while (start <= array.length) {
        if (value === array[start]) {
            return start;
        }
        start += 1;
    }
    return -1;
}

console.log(linearSearch([1, 2, 4, 6, 7], 2));

function linearSearchFromBack(array, value) {
    let end = array.length - 1;
    while (end >= 0) {
        if (array[end] === value) {
            return end;
        }
        end -= 1;
    }

    return -1;
}
console.log(linearSearchFromBack([3, 5, 7, 9, 12, 3, 7, 9, 2], 3));

// Linear Search For sorrted Array
function BinarySearch(array, number) {
    let left = array[0];
    let right = array[array.length - 1];
    for (let i = left; i < array.length; i++) {
        let median = Math.floor((left + right) / 2);
        
        if (array[median] === number) {
            return median;
        }
        if (array[median] < number) {
            right = median - 1;
        } else {
            left = median = 1;
        }
        median = Math.floor((left+right)/2)
    }
    return -1;
}

console.log(BinarySearch([2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 19], 9));
