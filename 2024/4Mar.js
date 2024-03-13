function fibonciNumber(num) {
    if (num <= 1) {
        return num;
    }else{
        
    }

    if ((num === (num - 1) + (num - 2))) {
        return num;
    }

    const fibonce = fibonciNumber(num - 1);
    return fibonce;
}


function fibonce(n, a = 0, b = 1) {
    if (n > 0) {
          console.log(a);
         fibonce(n-1 , b , b+a)
    }
}



console.log(fibonce(30));
// Helper function to generate Fibonacci numbers recursively
function fib(n, a = 0, b = 1) {
    if (b <= n) {
        console.log(a);
        fib(n + 1, b, a + b);
    }
}

// Example: Print Fibonacci numbers up to 100
fib(100);
