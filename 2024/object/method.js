/**
 * Object.assign(target,source1,source2,source3......sourceN)
 * @param target the target object wuchi will be going to be updated
 * @param socurce // the objects which will add to the target object
 * @returns target ==> target Object with updated Object to return
 */

const objectAssign1 = { a: 1, b: 3, c: 2 };
const objectAssign2 = { a: 3, c: 4 };
// const assignedObject = Object.assign(objectAssign1, objectAssign2);
// console.log(assignedObject, objectAssign1, objectAssign2); // { a: 3, b: 3, c: 4 } { a: 3, b: 3, c: 4 } {a:3,c:4}

const assignedObject1 = Object.assign(objectAssign2, objectAssign1);
console.log(assignedObject1, objectAssign1, objectAssign2); //{ a: 1, c: 2, b: 3 } { a: 1, b: 3, c: 2 } { a: 1, c: 2, b: 3 }  how values got updated here

/**
 * Object.create(proto, propertyObject)
 * @param proto  the object which will prototype of newely created Object
 * @param propertyObject the property of the new created Object
 */
const createObject = {
    strudent: "Rohit",
    call: function () {
        return `name odd the class ${this.strudent}`;
    },
};

const newCreatedObject = Object.create(createObject);
newCreatedObject.city = "Mumbai";
newCreatedObject.area = "Vasai";
console.log(newCreatedObject.call(), newCreatedObject instanceof Object); // name odd the class Rohit true
console.log(createObject.area); // undefined    -- not available in creaObject // its copy by value

//console.log(newCreatedObject instanceof createObject); // it will throw an error

/**
 *Object.defineProperties(obj,props)
 @param obj  the object of which properties
 @param props == new Propetries which are need to be set on obj
 */

//Eg using Object.defineProperties  in the best scenerio
function Customer(name, initialBalance) {
    // custoemr constructor
    var customerData = {}; // global Variable to store the data
    Object.defineProperties(this, {
        name: {
            value: name,
            writable: false,
            enumerable: true,
        },
        balance: {
            get: function () {
                return customerData.balance;
            },
            set: function (newBalance) {
                if (newBalance >= 0) {
                    customerData.balance = newBalance;
                } else {
                    throw new Error("Invalid balance");
                }
            },

            enumerable: true,
        },
    });

    this.balance = initialBalance;
}

const rohit = new Customer("Rohit", 1000);
rohit.balance = 2000;
console.log(rohit.balance);

/// Using the same method

function NormalCustomer(name, initialBalance) {
    var customerData = {
        _name: name, //Private property for name
        _balance: initialBalance, // Private property for balance
    };
    this.name = name;
    this.getbalance = function () {
        return customerData.balance;
    };

    this.setbalance = function (newBalance) {
        if (newBalance >= 0) {
            customerData.balance = newBalance;
        } else {
            throw new Error("Invalid balance");
        }
    };

    this.setbalance(initialBalance);
}

const normalCustomer = new NormalCustomer("Tiwari", 1000);
console.log(normalCustomer.name); // Tiwari
normalCustomer.name = "Rohit Tiwari";
console.log(normalCustomer.name);

/***
 * Object.defineProperty(obj,props,descriptor)
 * @obj the object of which key are about to change
 * @prop the name of the key about to change
 * @descriptor the values of descriptor values  ==> eg writable and enumarable
 * @returns Obj with change
 */

const definePropertyObject = {
    name: "Rohit",
    school: "JP School",
    rollNo: 23,
};

Object.defineProperty(definePropertyObject, "rollNo", {
    writable: false,
});

definePropertyObject.rollNo = 50;
console.log(definePropertyObject);

/**
 * Object.entries(obj)
 * @param obj the obj to check of which entries are looking
 * @returns [{key ,value},{key,value}]
 */

const entriesObj = { foo: "bar", baz: 42 };
const entries = Object.entries(entriesObj);
console.log(entries);

// creating a Map Object
const newMap = new Map(Object.entries(entriesObj));
console.log(newMap, "---");


/**
 * Object.freeze(obj)
 * @param obj ==> the object which we need to freeze 
 */


const freezeObject = {
    prop: 42,
  };

  Object.freeze(freezeObject)

  freezeObject.prop = 234
  console.log(freezeObject);

  /**
   * Object.fromEntries(iterables)
   * @param iterables  ==> itrable like array and 
   * @returns returns and Object with key:value format
   */

  const fromEntriesItrable = [["amount",30]]
  const fromEntries = Object.fromEntries(fromEntriesItrable)
  console.log(fromEntries);


  /**
   * Object.groupBy(array ,callBackFn)
   * @param array => itrable object to be groupby
   * @param callBackFn => fucntion to make logic for grouping
   * @returns Object with values on the callBackFn based logic
   */



//     const inventory = [
//         { name: "asparagus", type: "vegetables", quantity: 5 },
//         { name: "bananas", type: "fruit", quantity: 0 },
//         { name: "goat", type: "meat", quantity: 23 },
//         { name: "cherries", type: "fruit", quantity: 5 },
//         { name: "fish", type: "meat", quantity: 22 },
//     ]

//     const result = Object.groupBy(inventory, ({ type }) => type);
//     console.log(groupedInventory);

// const data = [
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 3, name: 'Charlie', age: 35 },
//   { id: 4, name: 'Alice', age: 40 },
// ];

// const groupedData = Object.groupBy(data, 'name');
// console.log(groupedData);

