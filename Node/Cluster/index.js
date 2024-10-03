import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";
import process from "node:process";

let clusterDef =
    "Running multiple instances of Node js , with each one being isolated from the other one";
// When isolation is not important we can use worker-threads instead of cluster on child process;
// cluster is basically allow us to create a child process in much better and easier way;

let numCpu = availableParallelism();
console.log(numCpu, "====");

if (cluster.isPrimary) {
    console.log("primary process", process.pid);
    for (let i = 0; i < numCpu; i++) {
        cluster.fork({ PORT: 8000 + i });
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid}`);
    });
} else {
    http.createServer((req, res) => {
        res.end("Hello");
    }).listen(800);
    console.log(`Worker ${process.pid} started`);
}
