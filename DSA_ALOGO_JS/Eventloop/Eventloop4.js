const fs = require("fs");
console.log("start");

process.nextTick(() => {
    console.log("nextTick 1");

    Promise.resolve()
        .then(() => {
            console.log("promise 1");
        })
        .then(() => {
            console.log("promise 2");
        });

    setTimeout(() => {
        console.log("timeout 1");
    }, 0);
});

Promise.resolve().then(() => {
    console.log("promise 3");
});

fs.readFile("new.txt",(err,data)=>{
    console.log('text I/o',data)
  if(err){
    console.log(err)
  }
})

console.log("end");
