/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (nums.length < 2) { return 0 }
    let sort = mergeSort(nums)
    console.log(sort, "===")
    // let maxDiff = 0
    // for (let i = 1; i < sort.length; i++) {
    //     let temDiff = sort[i] - sort[i - 1]
    //     console.log(temDiff)
    //     maxDiff = Math.max(maxDiff, temDiff)

    // }
    // return maxDiff

};

// let use the quick sort algorith  first sort the array then find the max diff value in them
function pivot(array, start = 0, end = array.length - 1) {
    let pivotValue = array[start]
    let swpIdx = start;
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]]
    }
    for (let i = start; i <= end; i++) {
        if (pivotValue > array[i]) {
            swpIdx++
            swap(array, swpIdx, i)
        }
    }
    swap(array, start, swpIdx)
    return swpIdx
}

function quickSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
        // first get the pivotValue
        let piviotIndex = pivot(array, start = start, end = end)
        // just look at the left side
        quickSort(array, start, piviotIndex - 1)
        //now just look at the rightside of 
        quickSort(array, piviotIndex + 1, end)
    }
    return array
}

function mergeSort(array) {
    if(array.length <= 1){
return array}
   let mid = Math.floor(array.length /2)
    //now give this values to and call mergeSort again
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return mergeArray(left,right)
}

function mergeArray(array1, array2){
    let result = []
    // here i have to merge both of the array
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i])
            i++
        } else {
            result.push(array2[j])
            j++
        }
    }

    //if there is anything left in first array
    while (i < array1.length) {
        result.push(array1[i])
        i++
    }

    while (j < array2.length) {
        result.push(array2[j])
        j++
    }
    return result
}

console.log(maximumGap([1,1,1]))