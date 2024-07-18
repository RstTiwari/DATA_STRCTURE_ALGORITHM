function mergeSortedArray(nums1, nums2) {
    let p1 = nums1.length - 1;
    let p2 = nums2.length - 1;
    let p = p1 + p2 - 1;

    // beacuse its i m possible to replce in plce for nums1
    const tempArray = new Array(p);
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            tempArray[p] = nums1[p1];
            p1--;
        } else {
            tempArray[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // if anything left in num2
    while (p2 >= 0) {
        tempArray[p] = nums2[p2];
        p2--;
        p--;
    }
    return tempArray;
}

console.log(mergeSortedArray([1, 2, 3, 4], [3, 4, 6]));
