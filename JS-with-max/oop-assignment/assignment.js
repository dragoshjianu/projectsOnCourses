class Course {
	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	randament() {
		return this.length / this.price;
	}

	printSummary() {
		console.log(this.title);
		console.log(this.lenght);
		console.log(this.price);
	}
}

class PracticalCourse extends Course {
	constructor(numOfExercises) {
		super();
		this.numOfExercises = numOfExercises;
	}
}

class TheoreticalCourse extends Course {
	constructor() {
		super();
	}

	publish() {
		console.log("Published by....");
	}
}

const htmlCourse = new Course("HTML Fundamentals Course", 120, 19.99);
const jsCourse = new Course("Javascript Fundamentals Course", 600, 59.99);

console.table(htmlCourse);
console.table(jsCourse);

console.log("----Print Randament------");
console.log(htmlCourse.randament());
console.log(jsCourse.randament());

console.log("----Print Summaries------");
htmlCourse.printSummary();
jsCourse.printSummary();
