function tringularSumOfArray(array) {
  // base condtion
  if (array.length === 1) {
    return array[0];
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      let sum = (array[i] + array[i - 1]) % 10;
      newArray.push(sum);
    }
  }

 return tringularSumOfArray(newArray);
}


console.log(tringularSumOfArray([1,4,5,6,2,3]))