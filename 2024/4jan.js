var productExceptSelf = function (nums) {
    let length = nums.length;
    let result = new Array(length).fill(1);
    let productBefore = 1;

    for (let i = 0; i < length; i++) {
        result[i] *= productBefore;
        productBefore *= nums[i];
    }
    let productAfter = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= productAfter;
        productAfter *= nums[i];
    }
    return result;
};

// neeed
const productExceptSelf2 = (nums) => {
    let length = nums.length;
    let result = new Array(length).fill(1);
    let productBefore = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= productBefore;
        productBefore *= nums[i];
    }
    let productAfter = 1;
    for (let i = nums.length -1; i >= 0; i--) {
        result[i] *= productAfter;
        productAfter *= nums[i];
    }
   console.log(result)

    return result;
};

console.log(productExceptSelf2([1, 2, 3, 4]));
