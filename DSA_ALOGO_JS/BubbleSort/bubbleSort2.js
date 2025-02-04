function bubbleSort(array) {
  let i = array.length - 1;
  while (i >= 0) {
    let j = 0;
    console.log(i);
    while (j < i) {
      if (
        array[j].grade > array[i].grade ||
        (array[j].grade == array[i].grade && array[j].name > array[i].name)
      ) {
        [array[j], array[i]] = [array[i], array[j]];
      }
      j++;
    }
    i--;
  }
  return array;
}

const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 90 },
  { name: "Emma", grade: 90 },
  { name: "Alice", grade: 85 },
];
console.log(bubbleSort(students), "===re");
