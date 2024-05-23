const fs = require("fs");

// simulating bloking oprations

fs.readFile("practise.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data, "dataa for Practise file");
});

console.log("Doing  the Other Task while Reading the file from IO oprations");

setTimeout(() => {
    console.log("Time out compledted");
});

process.nextTick(() => {
    console.log("process tick excuted");
});

console.log("End of Script but still Waiting for  file");
