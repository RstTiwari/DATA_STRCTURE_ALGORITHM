console.log("Start");

setTimeout(() => {
    console.log("F");
}, 0);

setImmediate(() => {
    console.log("G");
}, 100);

process.nextTick(() => {
    console.log("Callback is executed");
});
console.log("End");
