  // Theses are the Following Phases of EventLoops in Nodejs
  // visit to this link for more details

let link = "https://www.builder.io/blog/visual-guide-to-nodejs-event-loop"
  
/**
   *Timers   => Pending CallBacks  => idle Prepare => poll => check => close Callbacks
*/    

/**
 * Timers =>  this phase executes callbacks scheduled by setTimeout() and setInterval().
 * 
 * A timer specifies the threshold after which a provided callback may be executed rather than the exact time a person wants it to be
 *  executed. Timers callbacks will run as early as they can be scheduled after the specified amount of time has passed; 
 * however, Operating System scheduling or the running of other callbacks may delay them.
 */


/**
 *  Pending callbacks     ==> ECONNREFUSED  , ETIMEDOUT   EADDRINUSE
 *  Any kind of system error occurs the system will wait to report this error ,
 *  it will be passed into the Pending Callback.
 * 
 *  
 * */ 

/**
 * Poll  => its has Poll phase  =(Check for I/O Events) and Check (Checks for setImmediate(event)) Phase  
 *    Calculating how long it should block and poll for I/O, then
      Processing events in the poll queue.
 */

      // Example base on Poll phase

     const fs = require("fs")

      console.log("start")

      setTimeout(() => {
        console.log("set Time out has been scheduled");
      }, 1000);

      Promise.resolve().then(
      console.log("Mictortask"),
        fs.readFile("new.txt",(err,data)=>{
          if(err){
            console.log(err);
          }
          console.log("file read IO function");
        })
      )
      
      fs.readFile("new.txt",(err,data)=>{
        if(err){
          console.log(err);
        }
        console.log("file read IO function  1233");
      })

      setImmediate(()=>{
        console.log("SetImmediate FFunction is Scheduled");
      })    

      process.nextTick(()=>{
        console.log("tick")
      })  
   

      console.log("stope");



/**
 * 
 * check ==> it schedules anything with the setImmediate()
 */


/**
 * close callbacks
 */