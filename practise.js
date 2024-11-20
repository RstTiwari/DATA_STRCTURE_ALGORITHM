function nonReptetive(text) {
    let obj = new Map();
    for (let i = 0; i < text.length; i++) {
        if (obj.has(text[i])) {
            obj.set(text[i], obj.get(text[i]) + 1);
        } else {
            obj.set(text[i], 1);
        }
    }

    // now getting the value has cout of one
    for (let [key, value] of obj) {
        if (value === 1) {
            return key
        }
    }
}

console.log(nonReptetive("aaabbcdde"));

let data = sallery
    .find({
        $group: {
            _id: "sallery",
        },
    })
    .sort({ sallery: -1 })
    .skip(2).limit(1);




[1,3,4,5,5,6,7]
 0       4
4  + 0 -1 = 3