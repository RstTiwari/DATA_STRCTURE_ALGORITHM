var names = [];
names.push("rohit");
console.log(names); ///
// ReadOnly Array which can not be modified
var readOnlyArray = ["rohit"];
//readOnlyArray.push() /// pussh  push does not exit on read only type
var tuples;
tuples = [123, "rohit", { jdd: "jdjf" }];
console.log(tuples);
// Defining an Object using typescript
var car = {
    type: "Diselt",
    millage: 200
}; // Goo with predefing the keyword like this
// what if we want to add Key latterOn or maybe the add many key
var caraddingLatter = {
    type: "CNG",
    year: 2012
};
console.log(caraddingLatter);
//Using index signature without using predeinfed Propeties
var nameAgemap = {};
nameAgemap.std = 30;
nameAgemap.profit = 40;
nameAgemap.school = "Rohit";
console.log(nameAgemap);
/**
 * @enums //
 */
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["north"] = 0] = "north";
    cardinalDirections[cardinalDirections["south"] = 1] = "south";
    cardinalDirections[cardinalDirections["west"] = 2] = "west";
    cardinalDirections[cardinalDirections["east"] = 3] = "east";
})(cardinalDirections || (cardinalDirections = {}));
console.log(cardinalDirections.north);
var numericEnums;
(function (numericEnums) {
    numericEnums[numericEnums["north"] = 1] = "north";
    numericEnums[numericEnums["south"] = 2] = "south";
    numericEnums[numericEnums["west"] = 3] = "west";
})(numericEnums || (numericEnums = {}));
console.log(numericEnums.west);
var carYear = 2020;
var carName = "Audi";
console.log(carYear, carName);
var rectangle = {
    height: 200,
    width: 300,
    name: "Audi"
};
console.log(rectangle);
