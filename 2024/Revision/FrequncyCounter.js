function findingLonestSubString(str) {
    let longest = "";
    let current = "";
    let visited = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in visited)) {
            console.log(!str[i]);
            visited[str[i]] = i;
            current = current + str[i];
        } else {
            if (current.length >= longest.length) {
                longest = current;
            }
            i = visited[str[i]];
            console.log(visited[str[i]]);
            current = "";
            visited = {};
        }
    }

    if (current.length >= longest.length) {
        longest = current;
    }

    return longest;
}

console.log(findingLonestSubString("tet"));


function checkStringChar() {
   
}

console.log(checkStringChar("rohit"))

const obj = {
    name:"rohit",
    class:"rohit"
}

for(let key in obj ){
    console.log(key);
}

const str = "rohit"
for(let key of str){
    console.log(key);
}