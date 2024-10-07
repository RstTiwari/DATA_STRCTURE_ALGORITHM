const { exec, spawn, execFile } = require("node:child_process");

// exec("C:\\DSA-javascript\\test.bat", (err, stdout, stderr) => {
//     if (err) {
//         console.log("an error as occurred", err);
//     }
//     console.log(stdout);
// });

execFile(
    "python3",
    ["C:\\DSA-javascript\\python\\data_type.py"],
    (err, stdout, stderr) => {
        if (err) {
            console.log(err, "occurred");
        }
       console.log(stdout)
    }
);
