function flatDeepArray(array) {
    let flatedArray = [];
    for (let ele of array) {
        if (Array.isArray(ele)) {
            flatedArray.push(...flatDeepArray(ele));
        } else {
            flatedArray.push(ele);
        }
    }
``    return flatedArray;
}

let flatArray = flatDeepArray([1, 2, [2, 3, [34, 34], [23]]]);
console.log(flatArray);
