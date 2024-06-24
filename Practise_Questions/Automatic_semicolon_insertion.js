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
