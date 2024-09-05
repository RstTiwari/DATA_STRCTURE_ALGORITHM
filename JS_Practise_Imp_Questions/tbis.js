"use-strict

function foo (){
    console.log(this)
}

function callFoo(fn){
    fn()
}

const newFoo = (fn)=>{
    fn()
}

const obj ={foo}
callFoo(obj.foo)
//newFoo(obj.foo)

