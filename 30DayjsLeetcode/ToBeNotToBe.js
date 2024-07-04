
var expect = function(val) {
        let obj = {
            toBe:function(par){
                if(val === par){
                    return {"value":true}
                }else{
                    throw new  Error("Not Equal")
                }
            },
            notToBe:function (val){
                if(this.num !== val){
                    return {'value':true}
                }
                throw new Error("Equal")
            }

        }
        
        return obj
};
const  o =  {}

// () => expect(5).toBe(5)
console.log(expect(o).toBe(o))
