// Select all needed elements

const choices = document.querySelectorAll(".option");
const playerScore = document.querySelector(".player-score em");
const computerScore = document.querySelector(".computer-score em");
const result = document.querySelector(".result");
const winnerText = result.querySelector(".winner span");
const resetBtn = document.querySelector(".reset-game");
const closeBtn = document.querySelector(".close-btn");

const scissorsPaper = document.getElementById("scissors-paper");
const paperRock = document.getElementById("paper-rock");
const rockLizard = document.getElementById("rock-lizard");
const lizardSpock = document.getElementById("lizard-spock");
const spockScissors = document.getElementById("spock-scissors");
const scissorsLizard = document.getElementById("scissors-lizard");
const lizardPaper = document.getElementById("lizard-paper");
const paperSpock = document.getElementById("paper-spock");
const spockRock = document.getElementById("spock-rock");
const rockScissors = document.getElementById("rock-scissors");

const scores = {
	player: 0,
	computer: 0,
};

//Get dynamicaly options from DOM
const getOptions = () => {
	let allOptions = [];
	choices.forEach((option) => {
		option = option.dataset.option;
		allOptions.push(option);
	});
	return allOptions;
};

//Randomly generate computer's choise
const getComputerChoice = () => {
	const random = Math.floor(Math.random() * getOptions().length);
	const allOptions = getOptions();
	return allOptions[random];
};

//Play Round
const getWinner = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return "draw";
	}
	// Player winds
	else if (
		// Scissors cuts Paper
		(playerSelection === "scissors" && computerSelection === "paper") ||
		// Paprer covers Rock
		(playerSelection === "paper" && computerSelection === "rock") ||
		// Rock crushes lizard
		(playerSelection === "rock" && computerSelection === "lizard") ||
		// Lizard poisins Spock
		(playerSelection === "lizard" && computerSelection === "spock") ||
		// Spock smashes scissors
		(playerSelection === "spock" && computerSelection === "scissors") ||
		// Scissors decapitates Lizard
		(playerSelection === "scissors" && computerSelection === "lizard") ||
		// Lizard eats paper
		(playerSelection === "lizard" && computerSelection === "paper") ||
		// paper disporoves spock
		(playerSelection === "paper" && computerSelection === "spock") ||
		// spock vaporizes rock
		(playerSelection === "spock" && computerSelection === "rock") ||
		// rock crushes scissors
		(playerSelection === "rock" && computerSelection === "scissors")
	) {
		return "player";
	} else return "computer";
};

const play = (e) => {
	const computerChoice = getComputerChoice();
	console.log(computerChoice);
	let playerChoice;
	if (!e.target.parentElement.parentElement.dataset.option) {
		playerChoice = e.target.parentElement.dataset.option; // if svg is clciked
	} else {
		playerChoice = e.target.parentElement.parentElement.dataset.option; // if path is clicked
	}
	const winner = getWinner(playerChoice, computerChoice);
	playSounds(playerChoice, computerChoice);
	showWinner(winner, playerChoice, computerChoice);
	console.log(winner);
	endGame(winner);
};

const showWinner = (winner, playerChoice, computerChoice) => {
	if (winner === "player") {
		scores.player++;
		playerScore.textContent = scores.player;
	}
	if (winner === "computer") {
		scores.computer++;
		computerScore.textContent = scores.computer;
	}
};

const playSounds = (playerChoice, computerChoise) => {
	if (
		(playerChoice === "scissors" && computerChoise === "paper") ||
		(playerChoice === "paper" && computerChoise === "scissors")
	) {
		scissorsPaper.play();
	} else if (
		(playerChoice === "paper" && computerChoise === "rock") ||
		(playerChoice === "rock" && computerChoise === "paper")
	) {
		paperRock.play();
	} else if (
		(playerChoice === "rock" && computerChoise === "lizard") ||
		(playerChoice === "lizard" && computerChoise === "rock")
	) {
		rockLizard.play();
	} else if (
		(playerChoice === "lizard" && computerChoise === "spock") ||
		(playerChoice === "spock" && computerChoise === "lizard")
	) {
		lizardSpock.play();
	} else if (
		(playerChoice === "spock" && computerChoise === "scissors") ||
		(playerChoice === "scissors" && computerChoise === "spock")
	) {
		spockScissors.play();
	} else if (
		(playerChoice === "scissors" && computerChoise === "lizard") ||
		(playerChoice === "lizard" && computerChoise === "scissors")
	) {
		scissorsLizard.play();
	} else if (
		(playerChoice === "lizard" && computerChoise === "paper") ||
		(playerChoice === "paper" && computerChoise === "lizard")
	) {
		lizardPaper.play();
	} else if (
		(playerChoice === "paper" && computerChoise === "spock") ||
		(playerChoice === "spock" && computerChoise === "paper")
	) {
		paperSpock.play();
	} else if (
		(playerChoice === "spock" && computerChoise === "rock") ||
		(playerChoice === "rock" && computerChoise === "spock")
	) {
		spockRock.play();
	} else if (
		(playerChoice === "rock" && computerChoise === "scissors") ||
		(playerChoice === "scissors" && computerChoise === "rock")
	) {
		rockScissors.play();
	}
};

const endGame = (winner) => {
	if (scores.player === 5 || scores.computer === 5) {
		if (result.classList.contains("hidden")) {
			result.classList.remove("hidden");
			winnerText.textContent = winner;
		}
	} else {
		return;
	}
};

const resetGame = () => {
	scores.player = 0;
	playerScore.textContent = scores.player;
	scores.computer = 0;
	computerScore.textContent = scores.computer;
};

//Event Listeners
choices.forEach((choice) => {
	choice.addEventListener("click", play);
});
closeBtn.addEventListener("click", () => {
	result.classList.add("hidden");
	resetGame();
});
resetBtn.addEventListener("click", resetGame);
