function bianarySearch(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let m = Math.floor((e + s) / 2);

    while (nums[m] !== target) {
        console.log(s, e, m);
        if (nums[m] < target) {
            e = m - 1;
        } else {
            s = m + 1;
        }

        m = Math.floor((e + s) / 2);
    }
    return m;
}

console.log(bianarySearch([1, 2, 3, 4, 5, 8, 9], 5));

//  [1, 2, 3, 4, 5, 8, 9]
//   s        m        e
// if nums[m] < target
//   e = m -1
//  [1, 2, 3, 4, 5, 8, 9]
//   s     e
