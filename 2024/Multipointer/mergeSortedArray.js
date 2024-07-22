function mergeSortedArray(nums1, m, nums2, n) {
    // making faliure condtion first
    if (m <= 0) {
        return nums2;
    }

    if (n <= 0) {
        return nums1;
    }

    let cur = 0;
    let next = 0;
    let tempArray = [];

    while (cur < m && next < n) {
        if (nums1[cur] <= nums2[next]) {
            tempArray.push(nums1[cur]);
            cur++;
        } else {
            tempArray.push(nums2[next]);
            next++;
        }
    }

    // if anything remaind in nums1
    while (cur < m) {
        tempArray.push(nums1[cur]);
        cur++;
    }

    // if anything remaind in nums2
    while (next < n) {
        tempArray.push(nums2[next]);
        next++;
    }

    return tempArray;
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));




// Practising MergeSorted Array
function mergeSortedArray2(num1,m,num2,n){
 
    let p1 = m -1
    let p2 = n -1
    let p  = m + n -1
    while (p1 <= 0  && p2 <= 0){
        if(num1[p1] >  num2[p2]){
            
        }
    }
}
console.log(mergeSortedArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
