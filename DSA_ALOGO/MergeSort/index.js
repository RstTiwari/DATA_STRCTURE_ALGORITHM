function mergingTwoSortedArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // taking care of remaining values of arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergingTwoSortedArray([2, 3, 6, 9, 11], [4, 5, 7, 8, 10]));

function splitTheArray(array) {
    // the base condition for this is
    if (array.length === 0 || array.length === 1) {
        return array;
    }
    let start = 0;
    let mid = Math.ceil(array.length / 2);
}
