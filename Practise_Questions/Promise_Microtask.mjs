console.log(1);
setTimeout(() => {
    console.log(2);
});

Promise.resolve()
    .then(() => {
        console.log(3);
    })
    .then(console.log(4));
console.log(5);

// 1 ,3,4,5 ,2



