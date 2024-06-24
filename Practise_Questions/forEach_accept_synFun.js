async function arrayLogs(array){
    array.forEach(async(item)=>{
        await delayLogs(item)
        console.log("log into forEach  function")
    })    
    console.log("into the delayLogs function  completed")  
}

async function delayLogs (item){
    console.log("call delay  befrore log")
    await delay(item)
    console.log("delay wait completed after")  // this will never be logged in because  delay function has not await not doing nothing asynchronously
}

async function delay (item){
    console.log("log brfore item log")
    console.log(item)        
    console.log("log after item log")
    
}
const value = ()=>{
}


arrayLogs([12,3,4,5,6])   
//"call delay  befrore log
//