function flatTheInput(obj) {
    // Declare a new Obj
    let newObj = {};
    for (let key in obj) {
        let value = obj[key];
        if (Array.isArray(value)) {
            flateArray(key, value, newObj);
        } else if (typeof value === "object") {
            flatObject(key, value, newObj);
        } else {
            newObj[key] = value;
        }
    }
    return newObj;
}

function flateArray(parentKey, array, newObj) {
    array.forEach((item, index) => {
        let newKey = `${parentKey}.${index}`;
        if (typeof item === "object") {
            flatObject(newKey, item, newObj);
        } else if (Array.isArray(item)) {
            flateArray(newKey, item, newObj);
        } else {
            newObj[newKey] = item;
        }
    });
    return newObj;
}

function flatObject(parentKey, obj, newObj) {
    for (let key in obj) {
        let newKey = `${parentKey}.${key}`;
        let value = obj[key];
        if (typeof value === "object") {
            flatObject(newKey, value, newObj);
        } else if (Array.isArray(value)) {
            flateArray(newKey, value, newObj);
        } else {
            newObj[newKey] = value;
        }
    }
    return newObj;
}

let myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] },
    ],
};
let newObj = flatTheInput(myObj);
console.log(newObj[`cars.0.name`]);

// Let newObj = {
//  “Name”: "John",
//   “age”: 30,
// “cars.0.name” : “ford”,
// “cars.1.name” :  “BMW”,
// “cars.2.name”: “Fiat”,
// “cars.0.models.0” = “Fiesta”
// “cars.0.models.1” = “Focus”,
// “cars.0.models.2” = “Mustang”,
// “cars.1.models.0” = “Fiesta”,
// “cars.1.name” = “BMW”,
// “cars.1.models.0” = “320”,
// “cars.1.models.1” = “X3”,
// “cars.1.models.2” = “X5”,
// “cars.2.name” = “Fiat”,
// “cars.2.models.0” = “500”,
// “cars.2.models.1” = “Panda”,
// }
