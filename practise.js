function subArray(array, num) {
    // get the count of each Element
    let result = [];
    let temObj = {};
    for (let num of array) {
        if (temObj[num]) {
            temObj[num] = temObj[num] + 1;
        } else {
            temObj[num] = 1;
        }
    }
    for (let arr of array) {
        let target = num - arr;
        if (temObj[target]) {
            result.push([arr, target]);
        }
    }
    return result

}

// Big(0)   =  2N



console.log(subArray([1,2,3,4,5,6,7,8,9],7))

