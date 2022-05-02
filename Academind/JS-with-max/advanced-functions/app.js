function add(a, b) {
	return a + b;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(5));

let prevResult = 0;

function addMoreNumbers(num1, num2) {
	const sum = num1 + num2;
	prevResult = sum;
	return sum;
}
