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
console.log(assignedObject1,objectAssign1,objectAssign2);  //{ a: 1, c: 2, b: 3 } { a: 1, b: 3, c: 2 } { a: 1, c: 2, b: 3 }  how values got updated here

