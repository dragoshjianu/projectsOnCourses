// Select all needed elements

const choises = document.querySelectorAll(".option");
const playerScore = document.querySelector(".player-score em");
const computerScore = document.querySelector(".computer-score em");
const resetBtn = document.querySelector(".reset-game");
const closeBtn = document.querySelector(".close-btn");

const scores = {
	player: 0,
	computer: 0,
};

//Get options from DOM
const getOptions = () => {
	let allOptions = [];
	choises.forEach((option) => {
		className = option.classList.value;
		let gotOptions = [];
		let arr = className.split(" ");
		gotOptions = [...arr];
	});
	console.log(gotOptions);
	return allOptions;
};

//
const computerChoice = () => {
	const random = Math.floor(Math.random() * getOptions().length);
	return getOptions()[random];
};

const playerChoise = () => {};

// console.log(computerChoice());
// console.log(playerChoise());
