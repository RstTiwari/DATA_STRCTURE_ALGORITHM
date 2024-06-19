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

fibonacciSeriesVar(10);
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

function validPalindrome() {
    
}
