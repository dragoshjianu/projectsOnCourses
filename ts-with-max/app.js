function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(26, 30, 'as-number');
console.log(combinedAges);
var combinedName = combine('Max', 'Anna', 'as-text');
console.log(combinedName);
var combinedStringNumbe = combine('30', '26', 'as-number');
console.log(combinedStringNumbe);
