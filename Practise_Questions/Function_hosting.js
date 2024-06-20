let car = new Car("maruti","Disel",2008)
console.log(car);

function Car(name,type,year){
    this.name = name
    this.type = type
    this.year = year
}

// this will be hoiseeted





let car2  = new Car2("maruti","Disel",3002)
console.log(car2);


let Car2 = (name,type,year)=>{
   this.name = name
   this.type = type
   this.year = year
}


// this will not be hosited