
// trying to slove this throuh
function pickingNumbers(arr){
    let sort = arr.sort((a,b) =>a -b)
    let result = []
    for (let i = 0; i < sort.length; i++){
   
    }

}
//[1, 3, 3, 4, 5, 6 ]
//console.log(pickingNumbers([4 ,6 ,5 ,3 ,3 ,1]));


// multipointer Questions
function countUniqueValues(array) {
    let sorted = array.sort((a, b) => a - b);
    let i = 0;
    for (let j = 1; j < sorted.length; j++) {
        if (sorted[i] !== sorted[j]) {
            i++;
            sorted[i] = sorted[j];
        }
    }
     return i +1;
}

//console.log(countUniqueValues([1,3,4,21,4,1,5,6,5,6,7,,8]));

function averagePair(arr, target) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = i; j < sorted.length; j++) {
            let checkValue = (sorted[i] + sorted[j]) / 2;
            if (checkValue === target) {
                result.push([sorted[i], sorted[j]]);
            }
        }
    }

    return result.length;
}
//console.log(averagePair([1,3,3,5,6,7,10,12,19],8));

function averagePairWhile(arr, num) {
    let start = 0
    let end = arr.length-1;
    let result = []
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return result.push([arr[start],arr[end]]);
      else if(avg < num) start++
      else end--
    }
    console.log(result,"---");
    return result;
}

console.log(averagePairWhile([1,3,3,5,6,7,10,12,13,19],8));