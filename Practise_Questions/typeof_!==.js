// type of does not works with ! operator

const myNumber = 100
const myString = "Rohit"

if(!typeof myNumber === "string"){
    console.log("myNumber is not string");
}else{
    console.log("its string")
}


if(!typeof myString === "number"){
    console.log("myString is not number")
}else{
    console.log("its Number");
}

// its string
// its Number