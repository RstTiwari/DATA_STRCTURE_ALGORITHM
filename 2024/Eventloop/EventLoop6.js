console.log("start");
asyncFunc1();
asyncFunc2();

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

async function asyncFunc1() {
    console.log("asyncFunc1 start");
    await new Promise(resolve => {
      console.log("asyncFunc1 await start");
      setTimeout(() => {
        console.log("asyncFunc1 timeout");
        resolve();
      }, 0);
    });
    console.log("asyncFunc1 end");
}
  
async function asyncFunc2() {
    console.log("asyncFunc2 start");
    await new Promise(resolve => {
      console.log("asyncFunc2 await start");
      setImmediate(() => {
        console.log("asyncFunc2 immediate");
        resolve();
      });
    });
    console.log("asyncFunc2 end");
}

console.log("end");

//Start
// asynFuncStart1
// asynFunc1 await start1
//asyn fucnt 2 start
// async awiat stat2
// end
//nextTick
// tiemout
//proisme
// asyncFunc1 timeout
// "asyncFunc1 end"
// asyuasyncFunc2  imdmee
// asyn start 2
// asyncFunc2 end