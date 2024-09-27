const { parentPort,getEnvironmentData,markAsUntransferable } = require("worker_threads");

const genrateSalesReport = (data) => {
    let report = "Sales report for the \n"
    let env_data =  getEnvironmentData("env")
    console.log(env_data,"===")
    data.forEach((item) => {
        report += `Item :${item.name}, of Amount ${item.amount}`;
    });
    return report;
};

parentPort.on("message", (message) => {
    if (message.type === "report") {
        const reports = genrateSalesReport(message?.data);
        parentPort.postMessage(reports);
    }
});
