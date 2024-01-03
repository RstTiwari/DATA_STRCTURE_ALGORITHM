var compress = function(chars) {
    let obj = {};
    for (let char of chars) {
        obj[char] ? (obj[char] += 1) : (obj[char] = 1);
    }
    let newArray = [];
    for (let key in obj) {
        newArray.push(key);
        newArray.push(obj[key].toString());
    }
    return newArray;
};

console.log(compress(["a","a","b","b","c","c","c"]))

var increasingTriplet = function(nums) {
    let start = 1 ;
    for(let i = start ; i < nums.length ; i ++){
        if((nums[i + 1] > nums[i] ) && (nums[i] > nums[i -1])){
            return true
        }
    }
    return false

};
console.log(increasingTriplet([20,100,10,12,5,13]))
console.log(increasingTriplet([1,2,1, 3,5,7]))
