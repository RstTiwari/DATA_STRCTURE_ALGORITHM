// Write a function to check the Valid Anagram 

function validAnagram (str1 ,str2){
    let validAnagram = false;
    // i have to check if  no of letter in both the string are same or not
    if (str1.length > str2.length || str2.length > str1.length) {
      return false;
    }
    let Obj1 = {};
    let Obj2 = {};

    // looping through the first string
    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        if (Obj1[element]) {
            Obj1[element] += 1;
        } else {
            Obj1[element] = 1;
        }
    }

    //looping through the second element;

    for (let i = 0; i < str2.length; i++) {
      const element = str2[i];
      if (Obj2[element]) {
        Obj2[element] += 1;
      } else {
        Obj2[element] = 1;
      }
    }

    for (let key in Obj1) {
        if (Obj1[key] === Obj2[key]) {
            validAnagram = true;
        } else {
            validAnagram = false;
        }
    }
    return validAnagram;
}

console.log(validAnagram("cinema","icaemn" ))

//CountUniqueValues 
// For given Sorted Array

function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i
}

console.log(countUniqueValues([1,2,2,3,4,,2,6,7]))

function countUniqueValues2(array) {
    /// using difreent method for counting the values
    let uniqueObj = {};
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!uniqueObj[element]) {
            uniqueObj[element] = 1
            count += 1;
        }
    }
    return count;
}

console.log(countUniqueValues2([2,3,4,5,6,7,89,1,,20,2,21,3,4]))

function checkValues (arr){
    for(let i = 1 ; i < arr.length ; i++){
        console.log(arr[i])
       
    }
}

checkValues([2,3,4,5,6,7,8,9,90])