class Course {
	#price;

	get price() {
		return `$${this.#price}`;
	}

	set price(value) {
		if (value < 0) {
			throw "invalid value";
		}
		this.#price = value;
	}

	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	lenghtPerUnit() {
		const perUnit = this.length / this.#price;
		return perUnit.toFixed(2);
	}

	summary() {
		console.log(
			`The course ${this.title} will prepare your IT career. It takes only ${this.length} for only ${this.price}`
		);
	}
}

const jsCourse = new Course(
	"JavaScript Full Course - All you need to know",
	30,
	15.99
);

const phpCourse = new Course(
	"PHP Backend Development Full Course - All you need to know",
	45,
	20.99
);
console.log(jsCourse);
console.log(phpCourse);
jsCourse.summary();

class PracticalCourse extends Course {
	constructor(title, length, price, numOfExercises) {
		super(title, length, price);
		this.numOfExercises = numOfExercises;
	}
}

const angularCourse = new PracticalCourse("Angular Course", 50, 36, 10);

console.log(angularCourse);
angularCourse.summary();

class TheoreticalCourse extends Course {
	publish() {
		console.log("Se publica imediat....");
	}
}

const flutterCourse = new TheoreticalCourse("Flutter Course", 48, 50);
flutterCourse.summary();
flutterCourse.publish();
