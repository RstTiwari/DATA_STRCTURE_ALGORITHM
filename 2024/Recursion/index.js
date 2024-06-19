/**
 *
 * @param {int} n  upto you want print
 * @param {*} current   value to Fibonacci series going to start   default 0
 * @param {*} next      value to be next in fiance Series default = 1
 * @param {*} count     to keep track numbers of values presented in
 */

function fibonacciSeries(n, current = 0, next = 1, count = 0) {
    if (count < n) {
        console.log(current);
        fibonacciSeries(n, next, current + next, count + 1);
    }
}

//fibonacciSeries(20)

const fibonacciSeriesVar = (n, current = 0, next = 1, count = 0) => {
    if (count < n) {
        console.log(current);
        fibonacciSeries(n, next, current + next, count + 1);
    }
};

//fibonacciSeriesVar(10);
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 *
 * @param {} str
 */
function validPalindrome(str) {}

/**
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Managing base conditions
    if (list1.length <= 0 && list2.length <= 0) {
        return [];
    }

    if (list1.length <= 0) {
        return list2;
    } else if (list2.length <= 0) {
        return list1;
    }

    // applying the recusrisive logic here
    if (list1[0] <= list2[0]) {
        return [list1[0]].concat(mergeTwoLists(list1.slice(1), list2));
    } else {
        return [list2[0]].concat(mergeTwoLists(list1, list2.slice(1)));
    }
};

console.log(mergeTwoLists([1, 2, 3, 4], [2, 3, 4]));
