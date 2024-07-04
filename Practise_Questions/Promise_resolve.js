const nePromise = new Promise((resolve,reject)=>{
    resolve(console.log("reslvoed"))
})

const quickPromise = Promise.race([nePromise])


quickPromise.then(()=>{
    console.log("promise in then")
})

console.log("Checking before promise")
