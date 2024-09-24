function selectionSort(array) {
    let i = 0;
    let min = 0;
    while (i < array.length) {
        min = i;
        let j = i + 1;
        while (j < array.length) {
            // before acceing check key are there
            if (
                array[j].grade < array[min].grade ||
                (array[j].grade == array[min].grade &&
                    array[j].name < array[min].name)
            ) {
                min = j;
            }
            j++;
        }
        [array[i], array[min]] = [array[min], array[i]];

        i++;
    }
    return array;
}

const students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 90 },
    { name: "Emma", grade: 90 },
    { name: "Alice", grade: 85 },
];
console.log(selectionSort(students));
