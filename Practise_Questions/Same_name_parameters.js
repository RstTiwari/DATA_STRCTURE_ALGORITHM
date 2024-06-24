function sameNameParameter(first, second, first) {
    console.log(first, second, first);
}

sameNameParameter(1, 2, 3); // 3,2,3  as second  first will redeclare  tha first first parameter

const sameNameParameterArrowFunction = (first, second, first) => {
    console.log(first, second, first);
};

sameNameParameterArrowFunction(1, 2, 3); // SyntaxError: Duplicate parameter name not allowed in this context
