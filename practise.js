function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizzBuzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log("not a fizzBuzz value");
    }
}
fizzBuzz(0)




