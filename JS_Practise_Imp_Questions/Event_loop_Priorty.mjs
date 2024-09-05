function evnetLoopsPriorites() {
    console.log("a-------------------------------------");
    setTimeout(() => {
        console.log("b-----------------------------------");
    });

    setInterval(() => {
        console.log("c");
    });

    process.nextTick(() => {
        console.log(
            "d--------------------------------------------------------"
        );
    });

    console.log("e--------------------------");
}

evnetLoopsPriorites(); // a e d b c

// Process.nextTick is not available in js its feature of Nodejs so it's not avalible in the Browser




