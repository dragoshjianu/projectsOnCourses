// class Person {
// 	name = "Max";

// 	constructor() {
// 		this.age = 30;
// 	}

// 	greet() {
// 		console.log(`Hi, I am ${this.name} and I am ${this.name} years old.`);
// 	}
// }

function Person() {
	this.age = 30;
	this.name = "Max";
	this.greet = function () {
		console.log(`Hi, I am ${this.name} and I am ${this.name} years old.`);
	};
}
const max = new Person();
max.greet();
