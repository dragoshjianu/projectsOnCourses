class Course {
	#price;
	get price() {
		return "$" + this.#price;
	}

	set price(value) {
		if (value <= 0) {
			throw "Invalid value!!!";
		}
		this.#price = value;
	}

	constructor(courseTitle, coursePrice, courseLength) {
		this.title = courseTitle;
		this.length = courseLength;
		this.price = coursePrice;
	}

	randament() {
		return this.length / this.#price;
	}

	printSummary() {
		console.log(`Title: ${this.title}, Lenght: ${this.lenght}, Price: ${this.price}`);
	}
}

class PracticalCourse extends Course {
	constructor(title, length, price, exercisesCount) {
		super(title, length, price);
		this.number_of_exercises = exercisesCount;
	}
}

class TheoreticalCourse extends Course {
	publish() {
		console.log("Published by....");
	}
}

const htmlCourse = new Course("HTML Fundamentals Course", 120, 19.99);
const jsCourse = new Course("Javascript Fundamentals Course", 59, 600);

console.log(htmlCourse);
console.log(jsCourse);

console.log("----Print Randament------");
console.log(htmlCourse.randament());
console.log(jsCourse.randament());

const softSkills = new TheoreticalCourse("Time Management", 30, 120);
const woodWorking = new PracticalCourse("How to work with wood", 12, 360);

// woodWorking.price = 0;

console.log("----Print Summaries------");
softSkills.printSummary();
woodWorking.printSummary();
