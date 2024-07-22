const obj1 = {
    prop1: function () {
        /// its key value as funcion
        return 1;
    },
    prop2() {
        // this one is method of Object  form ES6 shorthand
        return 2;
    },

    ["prop" + "3"]() {
        // this dynamic method name form ES6 shorthand
        return 3;
    },
};


console.log(obj1.prop1());