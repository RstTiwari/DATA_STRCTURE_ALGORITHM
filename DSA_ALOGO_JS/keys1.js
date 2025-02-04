Array.prototype.customKeys = function(){
   let index = 0
   for(let i = 0 ; i < this.length ; i ++){
       return {
           next:function(){
               if(i < this.length){
                   return{
                       value:index++,
                       done:false
                   }
               }else{
                   return{
                       value:index++,
                       done:true
                   }
               }
           },
           [
              Symbol.iterator
           ]:function(){
               return this
           }
       }
   }
}
let keys=[
    1,2,3,5,6
    
    ]
    
let key = keys.customKeys()
console.log(key.next())
