
function selectionSort(array) {
    let n = 0;
    let min = 0; //the index zero
    while (n < array.length) {
        // making min to the current n value
        min = n
        let j = n + 1;
        while (j < array.length) {
            if (array[j] < array[min]) {
                min = j;
            }
           console.log(n,j)
            j++;
        }
        [array[n], array[min]] = [array[min], array[n]];

        n++;
    } 
    return array;
}
let array = [9, 8, 7, 2, 43, 23];

console.log(selectionSort(array));

