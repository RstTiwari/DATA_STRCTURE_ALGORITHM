console.log("start");

setImmediate(() => {
  console.log("immediate 1");

  process.nextTick(() => {
    console.log("nextTick 1");
  });

  setTimeout(() => {
    console.log("timeout 1");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("promise 1");

  setImmediate(() => {
    console.log("immediate 2");
  });

  process.nextTick(() => {
    console.log("nextTick 2");
  });

  setTimeout(() => {
    console.log("timeout 2");
  }, 0);
});

console.log("end");

//start
//end
// promise 1
// nexttick 2
// timot2 
// imidiate 1
// nexttick 1
// time out2
// imidiate 2
