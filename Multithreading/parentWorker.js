const {
    Worker,
    isMainThread,
    setEnvironmentData,
    getEnvironmentData,
    markAsUntransferable,
} = require("worker_threads");
const path = require("path");


let sales_data = [
    {
        name: "The Texting Product",
        amount: 2394944,
    },
    {
        name: "The Texting Product2",
        amount: 23949423344,
    },
    {
        name: "The Texting Product",
        amount: 2394944,
    },
    {
        name: "The Texting Product2",
        amount: 23949423344,
    },
];

// const creatingWorkerThread = (data) => {
//     return new Promise((resolve, reject) => {
//         if (isMainThread) {
//             const worker = new Worker(path.join(__dirname, "childWorker.js"));
//             worker.postMessage({ type: "report", data });
//             worker.on("message", (report) => {
//                 resolve(report);
//                 worker.terminate();
//             });
//             worker.on("error", (error) => {
//                 reject(error);
//             });
//         }
//     });
// };

const creatingWorkerThread2 = (data) => {
    return new Promise((resolve, reject) => {
        if (isMainThread) {
            let env_data = {
                name: "Rohit",
            };
            markAsUntransferable(env_data, "==");
            setEnvironmentData("env", env_data);
            let worker = new Worker(path.join(__dirname, "childWorker.js")); // calling the other child thread
            worker.postMessage({ type: "report", data: data });
            worker.on("message", (report) => {
                resolve(report);
            });
            worker.on("error", (error) => {
                reject(error);
            });
        } else {
            console.log("it's not the Main thread");
            let untrafnferable = getEnvironmentData("env");
            console.log(untrafnferable, "==");
        }
    });
};

creatingWorkerThread2(sales_data)
    .then((report) => {
        console.log(`Genrated report for the Project is ${report}`);
    })
    .catch((error) => {
        console.log(error, "is  occured");
    });
