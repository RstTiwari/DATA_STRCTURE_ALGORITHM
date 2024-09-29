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

// console.log(mergingTwoSortedArray([2, 3, 6, 9, 11], [4, 5, 7, 8, 10]));

function mergeSort(array) {
    // the base condition for this is
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return mergingTwoSortedArray(left, right);
}
// console.log(mergeSort([2, 4, 1, 3, 6, 4]));
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // base condition
    if (nums.length <= 1) {
        return nums;
    }

    // recursive condition
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};

function merge(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }

    return result;
}

console.log(sortArray([5, 2, 3, 1]));
