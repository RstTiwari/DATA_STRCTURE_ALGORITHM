const fs = require("fs");

console.log("1. start");

setTimeout(() => {
  console.log("6. setTimeout 1");
}, );

setTimeout(() => {
  console.log("7. setTimeout 2");
}, 0);

Promise.resolve(console.log("34344"))

fs.readFile("new.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("4. file read 1");

  // this is being call after I/o so any imeadia assigne before this will be called
  setImmediate(() => {
    console.log("8. setImmediate inside fs.readFile");
  });
});
setImmediate(() => {
    console.log("10. setImmediate 10");
  });

setImmediate(() => {
  console.log("5. setImmediate 1");
});

process.nextTick(() => {
  console.log("3. nextTick 1");
});

process.nextTick(() => {
  console.log("2. nextTick 2");
});

console.log("9. end");
// start
//3444
// end
// 3 next tick1
//2 next tick2
// errors
// 4 file read
// 8 setim e
// 5 setimeidate
// 6 timeout
// 7 timeout




