const axios = require("axios");
const fs = require("fs");

console.log("start");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

// calling Api function inside this loophole circle thing
callAPi();
async function callAPi() {
    let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("API call complete:", response.data);

    setImmediate(() => {
        console.log("setImmediate inside API call");
    });

    process.nextTick(() => {
        console.log("nextTick inside API call 1");
    });

    fs.readFile("example.txt", (err, data) => {
        console.log("file read IO function");

        setImmediate(() => {
            console.log("setImmediate inside fs.readFile");
        });

        process.nextTick(() => {
            console.log("nextTick inside fs.readFile");
        });
    });
}

setTimeout(() => {
    console.log("setTimeout 2");
}, 0);

process.nextTick(() => {
    console.log("nextTick 2");
});

console.log("end");



