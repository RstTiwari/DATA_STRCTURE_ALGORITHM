function foo() {
    return;
    {
        message: "rohit";
    }
}
console.log(foo()); // Undefined

function foo() {
    return; // ; will insterted by ASI and below block will be consider as new block
    {
        message: "rohit";
    }
}
console.log(foo()); // Undefined it   ASIL automatic semicoln insetion will const it as

function foo() {
    return {
        message: "rohit",
    };
}
console.log(foo()); // {message:"Rohit"}

console.log("the first line"); // good to add semicolon here
[1, 2, 3].forEach((item) => {
    console.log(item);
});
console.log("ends here");

console
    .log("the first line") // error comes here
    [(1, 2, 3)].forEach((item) => {
        console.log(item);
    });
console.log("ends here");
