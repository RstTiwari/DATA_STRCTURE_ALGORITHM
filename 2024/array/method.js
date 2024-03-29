/**Learning all the best possible method of array class */

/**
 * Array.prototype.at(index)
 * @param index of the value we gonna retirive from it
 * @returns value at that index point
 *
 */

const arrayat = [12, 23, 123, 1343, 1334];
console.log(arrayat.at(6)); //undefined  ==> index  > array.length;
console.log(arrayat.at(-6)); // undefined   ==> index < - array.length
console.log(arrayat.at(-1)); // 1334

/*******This method same as the method of concat strign in js just be  Revise that at anypoint of time */

/**
 * Array.prototype.concat(array1,array2 ,array3 ,array4 ,.....arrayN)
 */

/**
 * Array.proptoype. copyWithin(target,start,end)
 * @param target
 * @param start
 * @param end
 */

const copyWithinArray = [1, 2, 34, 5, 5];
console.log(copyWithinArray.copyWithin(1, 3, 4)); //[ 1 ,5,34,5,5]
console.log(copyWithinArray.copyWithin(1, 3)); //[ 1 ,5,5,5,5]
console.log(copyWithinArray.copyWithin(3));

const copyWithinarray2 = [2, 3, 45, 2, 4, 67, 3455];
console.log(copyWithinarray2.copyWithin(2, 4)); // [1,3,23,4,67,3455,67,3445]
console.log(copyWithinarray2.copyWithin(2)); // try to understand this much better way in Reivsion

/**
 * Array.prototype.entries(array)
 * @param array the array which key object values need to be found
 * @returns key obj values
 */

const entriesArray = [2, 3, 45, 4, "rohit"];
console.log(entriesArray.entries()); // [Array Itreator]

for (const entries of entriesArray.entries()) {
    console.log(entries);
}

/**
 * Array.prototype.every(callBackFn ,thisArg)
 * @param callBackFn directly pass  a fucntion test the true and false scenrio on the array
 * @returns true or false even on element fails it returns false
 */

function checkLessThan(element, index, array) {
    console.log(element, index, array, "-----");
    return element >= 1;
}
const everyArray = [2, 6, 9, 10, 11, 20];
console.log(everyArray.every(checkLessThan), "---");

/**
 * Array.prototype.
 */
