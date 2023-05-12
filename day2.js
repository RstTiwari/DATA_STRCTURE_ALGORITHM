/**
 * Q What are the  javascript Accessors;
 */

const { log } = require("console");

let user = {
  name: "Rohit Kumar",
  area: "Vasai VIlage",
  sub: ["math", "hind"],

  get subject() {
    return this.sub;
  },

  set subject(value) {
    let investment = value.amount + value.subTotal;
    return (this.amount = investment);
  },
};

user.subject = { amount: 100, month: 2, subTotal: 500 };
console.log(user); // please run this code to see the outputr baby ;

// Q if No break in Switch Case;
let key = 1
switch (key) {
    case 0:
        console.log("case 0");
        break;
    case 1:
        console.log("case 1");
    case 2:
        console.log( "case 2");

    default:
        break;
};



