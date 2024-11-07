let arr = [10, 20, 30];
arr.forEach(function(num, index, array) {
    array[index + 1] = num * 2;
    console.log(num);
})



let obj ={
    length:4,
    1:10,
    2:30,
    3:40
}

Array.prototype.forEach.call(obj ,(x) => console.log(x))
