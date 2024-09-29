function quickSort(array) {}

function pivot(array, start = 0, end = array.lenght + 1) {
    let pivot = array[start];
    let swapIdx = 0;
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            swapIdx++;
            swap(array, swapIdx, i);
        }
    }
    swap(array, start, swapIdx);
    console.log(array);
    return swapIdx;
}
let array = [4, 8, 2, 1, 9, 10, 3];

console.log(pivot(array));
