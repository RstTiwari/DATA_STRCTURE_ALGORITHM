//Question 1: Async/Await with Multiple Promises

async function foo() {
    console.log("a");
    await bar();
    console.log("c");
}

async function bar() {
    console.log("d");
    await Promise.race("D").then(console.log("F"));
    console.log("e");
}

console.log("G");
foo(); // Called it Synchronously
console.log("H");

// G ,a , d , F ,H,e ,c