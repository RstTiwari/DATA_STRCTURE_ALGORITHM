const {
    Worker,
    isMainThread,
    parentPort  ,
    getEnvironmentData,
    setEnvironmentData,
} = require("node:worker_threads");

let arrayBuffer = new SharedArrayBuffer(16);
let view = new Uint32Array(arrayBuffer);
view[0] = 20;
console.log(view);

if (isMainThread) {
    const worker = new Worker(__filename, {
        workerData: view,
    });
    worker.on("message", (msg) => {
        console.log("Received a message from the child", msg);
    });
    worker.on("error", (err) => {
        console.log(err);
    });
    worker.on("exit", (code) => {
        if (code !== 0) {
            console.log("exit the worker thread with code", code);
        } else {
            console.log("worker thread finished");
        }
    });
} else {
    childFunction();   
    for(let i  = 1 ;  i < 5; i++){
     parentPort.postMessage(`message coming form thee ${i} child threead`)
    } 
}

function childFunction() {
    console.log("You new worker child function");
}
