var createCounter = function (init) {
    let tem = init;
    return {
        increment: function () {
            return ++init;
        },
        reset: function () {
            return (init = tem);
        },
        decrement: function () {
            return --init;
        },
    };
};
const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.reset());
