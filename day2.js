/**
 * Q What are the  javascript Accessors;
 */

let user = {
    name:'Rohit Kumar',
    area:"Vasai VIlage",
    sub:["math", "hind"],

    get subject (){
        return this.sub
    },

    set subject(value){
           return this.sub.push(value)
    }
}

console.log(user.subject) //["math"]