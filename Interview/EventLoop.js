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
//end
//nextTick
// promise
// asyu start 1
// asyn start 2
