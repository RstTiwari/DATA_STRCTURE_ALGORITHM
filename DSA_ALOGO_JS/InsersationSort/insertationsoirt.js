let array = [90, 3, 2, 6, 4, 8, 4, 89, 4];

function insertionSort(array) {
    let i = 1;
    while (i < array.length) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
        i++;
    }
    return array;
}

console.log(insertionSort(array));

function bubbleSort(array) {
    let i = array.length - 1;
    while (i >= 0) {
        let j = 0;
        while (j < i) {
            if (array[j] > array[i]) {
                [array[j], array[i]] = [array[i], array[j]];
            }
            j++;
        }
        i--;
    }
    return array;
}

function selectionSort(array) {
    let min = 0;
    let i = 0;
    while (i < array.length) {
        min = i;
        let j = i + 1;
        while (j < i) {
            if (array[j] < array[min]) {
                min = j;
            }
            j++;
        }
        [array[i], array[min]] = [array[min], array[i]];
        i++;
    }
    return array;
}
console.log(bubbleSort(array));
console.log(selectionSort(array));

let array2 = [90, 3, 2, 6, 4, 8, 4, 89, 4];
function insertionSort2(array) {
    let i = 1;
    while (i < array.length) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
        i++;
    }
    return array;
}

console.log(insertionSort2(array2));
