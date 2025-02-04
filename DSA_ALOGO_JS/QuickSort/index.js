function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        //Left side
        quickSort(array, left, pivotIndex - 1);

        //Right side
        quickSort(array, pivotIndex + 1, right);
    }

    return array;
}

function pivot(array, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIdx = start;

    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIdx++;
            swap(array, swapIdx, i);
        }
    }
    swap(array, start, swapIdx);
    return swapIdx;
}

let array = [4, 8, 2, 1, 9, 10, 3];

//console.log(quickSort(array));

function pivotFunction2(array, start = 0, end = array.length - 1) {
    let pivotValue = array[start];
    let swapIdx = start;
    function swap(array, i, j) {
        return ([array[i], array[j]] = [array[j], array[i]]);
    }

    for (let i = start; i <= end; i++) {
        if (pivotValue > array[i]) {
            swapIdx++;
            // need to swap those two values
            swap(array, swapIdx, i);
        }
    }
    //now lets swap the pivotValue also
    swap(array, start, swapIdx);
    return swapIdx;
}

function quickSort2(array, start = 0, end = array.length - 1) {
    //Get the pivot index for the first value
    if (start < end) {
        let pivotIndex = pivotFunction2(array, start, end);
        // now will divide array into two sections
        // left side
        quickSort2(array, start, pivotIndex - 1);

        // right side
        quickSort2(array, pivotIndex + 1, end);
    }
    return array;
}
let array2 = [10, 11, 8, 4, 8, 2, 1, 9, 10, 3]
console.log(quickSort2(array2));
