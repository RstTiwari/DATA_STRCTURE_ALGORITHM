/**
 * Object(value)
 *
 * ===> Object can behave slighlty different when called with new orr without new
 */

const o = new Object();
console.log(o); //{}

const o1 = new Object(null);
console.log(o1, typeof o1); // {}  object

const o2 = new Object(undefined);
console.log(o2, typeof o2); // {}  object

const o3 = new Object("");
console.log(o3, typeof o3); // ["String"]  object

const o4  = Object("")
console.log(o4,typeof o4);  // ["String"]  object

const o5  = Object(null)
console.log(o5,typeof o5);  //{} object