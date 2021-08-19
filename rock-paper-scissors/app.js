const playerBtns = document.querySelectorAll(".player-btn");
const resultsBox = document.querySelector(".results");

const computerPlay = () => {
	const options = ["rock", "paper", "scissors"];
	const choise = Math.floor(Math.random() * options.length);

	return options[choise];
};

const playRound = (playerSelection, computerSelection) => {
	let message = "";

	const player = playerSelection.toLowerCase();
	const computer = computerSelection.toLowerCase();

	if (player !== "rock" || player !== "paper" || player !== "scissors")
		message = "Please choose a correct option";
	if (player === computer) message = "This is a draw! play again";
	if (player === "rock" && computer === "scissors")
		message = "You win! Rock beats Scissors";
	if (player === "rock" && computer === "paper")
		message = "You lose! Paper beats Rock";
	if (player === "paper" && computer === "scissors")
		message = "You lose! Scissors beats Paper";
	if (player === "paper" && computer === "rock")
		message = "You win! Paper beats Rock";
	if (player === "scissors" && computer === "rock")
		message = "You lose! Rock beats Scissors";
	if (player === "scissors" && computer === "paper")
		message = "You win! Scissors beats Paper";

	return message;
};

playerBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const playerOption = btn.dataset.option;

		resultsBox.textContent = playRound(playerOption, computerPlay());
	});
});

const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let winner = "";

	const roundMessage = playRound(playerOption, computerPlay());

	playRound(playerOption, computerPlay());
	if (roundMessage.includes("draw")) {
		playerScore = playerScore;
		computerScore = computerScore;
	}
	if (roundMessage.includes("lose")) {
		computerScore++;
	}
	if (roundMessage.includes("win")) {
		playerScore++;
	}
};
