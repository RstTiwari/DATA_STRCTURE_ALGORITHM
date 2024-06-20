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
await foo(); // called it Asynchronously   again this will work in in Browser only because of Implicit async  context
console.log("H");

// G ,a d ,F,e,c ,H