function removeElement(array, val) {
    let cur = 0,
        next = 0;
    while (next <= array.length) {
        if (array[cur] !== val) {
            array[cur] = array[next];
            cur++;
        }
        next++;
    }
    console.log(array);
    return array[(0, cur)];
}

removeElement([3, 2, 2, 3], 3);
