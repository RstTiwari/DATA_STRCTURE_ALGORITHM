async function arrayLogs(array){
    array.forEach(async(item)=>{
        await delayLogs(item)
    })    
    console.log("into the delayLogs function  completed")  
}

async function delayLogs (item){
    await delay()
    console.log(item)
}

async function delay (item){
    return new Promise((resolve)=> setTimeout(resolve,0))
    
}


arrayLogs([12,3,4,5,6])