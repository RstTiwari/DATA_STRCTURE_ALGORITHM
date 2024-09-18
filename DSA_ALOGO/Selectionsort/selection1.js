let array = [9, 8, 7, 2, 43, 23];

function selectionSort(array) {
    let n = 0;
    let min = 0; // the index zero
    while (n < array.length) {
        let j = n + 1;
        while (j < array.length) {
            if (array[j] < array[min]) {
                min = j;
            }
            j++;
        }
        [array[n], array[min]] = [array[min], array[n]];

        n++;
    }
    return array;
}

console.log(selectionSort(array));
