// Global variables
// Select all needed elements
const choices = document.querySelectorAll(".option");
const playerScore = document.querySelector(".player .score em");
const computerScore = document.querySelector(".computer .score em");
const resetBtn = document.querySelector(".reset-game");
const rulesBtn = document.querySelector(".rules");
const rulesAudio = document.getElementById("rules-audio");
const message = document.querySelector(".message");
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

const computerChosen = document.querySelector(".computer .chosen-option");
const playerChosen = document.querySelector(".player .chosen-option");

// SVGs for transition
const chosenOption = {
	rock: `<svg
								xmlns="http://www.w3.org/2000/svg"
								height="200"
								width="200"
								viewBox="0 0 876.325 876.325"
								class="rock transition"
							>
								<path
									d="M866.325 438.162a428.162 428.162 0 0 1-428.163 428.163A428.162 428.162 0 0 1 10 438.162 428.162 428.162 0 0 1 438.162 10a428.162 428.162 0 0 1 428.163 428.162zm-342.972 31.905c27.99 9.621 49.089 33.512 64.479 63.823m-92.019-54.205c-12.634 49.174-6.615 47.612-5.683 59.888m26.666 21.857c-2.532-21.825-19.442-16.715-26.666-21.857m-29.07 45.244c19.03-30.353 33.031-59.712 75.626-94.204 5.07-2.706 10.691-.545 12.459 1.53 4.338 4.652 7.449 8.541 12.24 26.884 4.764 19.748 6.086 40.872 5.027 62.949-1.148 17.74-6.779 32.337-20.546 43.933-21.05 21.36-58.308 37.535-93.33 54.424m-63.823-220.32c-7.146 38.53-13.381 74.937-17.049 105.352-5.169 38.633-5.203 52.673-5.135 76.641M342.813 393.13c-14.692 43.835-22.198 80.484-28.852 116.28-4.244 28.706-7.849 57.412-10.928 86.117m-12.24-266.22c-25.25 76.803-28.373 129.83-40.217 182.726M692.09 96.31L566.63 205.159c-45.174-3.8-89.604-4.624-132.454.874-48.84 6.633-95.51 17.363-138.137 31.474-32.404 11.596-46.114 27.642-54.206 45.026-10.22 27.47-15.658 57.809-20.109 88.74-5.923 52.507-5.843 76.495-7.431 108.412 1.74 8.503-5.508 20.267 36.256 27.778l1.338 22.493c3.871 32.111 29.683 41.213 50.709 50.709l.437 14.862c4.178 33.697 39.109 36.503 59.014 38.906 9.403 15.342 10.788 33.513 38.469 42.403 14.238 4.091 24.222 5.477 52.02 3.497 4.377 9.096 8.576 18.59 17.486 17.486 48.607-3.125 115.909-27.08 164.803-48.96 26.291-17.054 60.245-66.722 64.697-103.603 3.99-35.519 7.183-69.446 6.557-95.734l149.503-106.226"
									fill="none"
									stroke="#000"
									stroke-width="20"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>`,
	paper: `<svg
								xmlns="http://www.w3.org/2000/svg"
								height="200"
								width="200"
								viewBox="0 0 876.325 876.325"
								class="paper transition"
							>
								<path
									d="M345.347 496.045l8.928 9.286m512.05-67.169a428.162 428.162 0 0 1-428.163 428.163A428.162 428.162 0 0 1 10 438.162 428.162 428.162 0 0 1 438.162 10a428.162 428.162 0 0 1 428.163 428.162zM213.918 95.688c14.625 19.415 31.8 40.383 62.857 55.714 107.806 46.057 166.362 72.514 221.786 104.286 53.262 32.426 97.063 79.13 145.714 136.786 6.407 9.266 20.817 19.528 8.929 51.07 25.544 16.805 14.382 40.12-.357 58.215 17.056 63.944-20.494 72.66-65 71.072-3.952 25.58-20.007 48.421-56.786 41.785-93.833-36.501-141.202-88.508-185.714-118.571l35.357 66.071c19.109 45.608-44.264 63.704-63.214 45.715-24.818-29.7-26.537-38.206-111.072-113.572-29.106-26.034-37.194-44.799-36.428-67.5 2.387-16.591.58-38.342-9.643-54.286-29.21-35.89-73.635-82.276-111.277-108.8 7.273-16.02 13.767-31.944 23.563-48.28 14.614-26.02 35.104-51.489 54.772-71.83 27.94-28.901 48.232-47.46 75.673-60.984zm196.429 334.286c118.474 90.39 144.66 97.411 177.5 142.857M445.968 374.989c21.658 18.492 38.683 33.998 89.399 71.216 53.26 35.53 86.705 52.942 116.673 67.175M475.768 319.178c22.798 24.357 44.335 52.008 83.59 77.024 31.884 23.577 60.628 35.77 93.846 47.343"
									stroke-width="20"
									stroke="#000"
									fill="none"
									stroke-linejoin="round"
									stroke-linecap="round"
									class="rock transition"
								/>
							</svg>`,
	scissors: `<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 876.325 876.325"
								height="200"
								width="200"
								class="scissors transition"
							>
								<path
									d="M866.325 438.162a428.162 428.162 0 0 1-428.163 428.163A428.162 428.162 0 0 1 10 438.162 428.162 428.162 0 0 1 438.162 10a428.162 428.162 0 0 1 428.163 428.162zM380.732 645.74c79.965-11.942 139.086-37.008 175.364-76.457m-235.437-8.495c115.112-15.857 152.371-22.868 199.029-30.946 29.74-5.798 47.77-2.006 48.544 20.63l-12.136 18.811c28.367 3.187 59.732 23.357 46.723 47.937l-35.8 60.073M460.828 333.24c-.583 21.5-7.446 45.092.607 63.713 13.331 17.817 18.134 44.164 25.485 67.962 13.566 9.638 20.742 10.252 42.476-4.855 13.395-10.282 18.097-26.393 20.024-41.262 1.905-18.406 4.98-36.812 8.495-55.218 4.258-15.276 31.644-7.954 31.554.606l-.607 31.554c-8.248 86.961 41.883 88.302 79.49 108.01M846.144 325.35l-108.01-4.247c-31.72-25.099-68.4-47.717-109.83-67.961-27.028-16.05-52.052-15.062-75.849-3.641-34.71 17.792-68.087 38.819-91.626 83.738L202.94 256.177c-40.131-15.408-77.837 26.564-34.587 62.5 79.303 46.548 175.223 81.31 244.539 121.966-97.828 23.116-193.757 31.042-290.049 41.869-28.03 5.743-39.547 76.408 6.675 78.883l191.14-.607c9.741 29.346-9.007 61.54 60.074 84.952 8.89 21.937 1.292 46.002 57.039 61.893 38.382 9.471 81.158.634 129.247-30.34 71.296 5.111 84.772 5.361 100.728-1.82 41.158-19.8 69.043-48.791 89.2-83.131l77.062-1.214"
									fill="none"
									stroke="#000"
									stroke-width="20"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>`,
	lizard: `	<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 876.325 876.325"
								height="200"
								width="200"
								class="lizard transition"
							>
								<path
									d="M866.325 438.162a428.162 428.162 0 0 1-428.163 428.163A428.162 428.162 0 0 1 10 438.162 428.162 428.162 0 0 1 438.162 10a428.162 428.162 0 0 1 428.163 428.162zM310.95 260.424c43.122-13.3 111.183-40.465 127.427-48.543 14.526-8.933 33.652-1.996 53.702 0-8.45-.855 205.058 87.075 200.85 102.548m-514.26 458.738c1.099-37.04.072-78.335-16.384-150.485-7.016-33.491-17.501-56.112-1.214-162.622 9.305-33.604 18.609-62.849 27.913-124.393 6.13-28.142-7.568-51.807 44.903-90.413 54.428-26.027 104.4-46.961 169.296-84.951 18.09-9.78 35.75-17.541 66.14-4.854 75.478 34.136 162.579 76.022 211.166 92.233 35.771 14.38 52.097 32.456 15.777 61.286-10.91 32.3-13.498 61.535-61.894 54.005-87.253-22.162-261.979-58.043-266.99-2.427.165 36.183 38.848 70.927 103.155 46.723 24.07-5.115 54.814-22.888 78.884-37.621 70.245-35.408 101.107 43.431 79.49 55.218l-112.864 88.592-103.155 89.806c-10.137 10.09-19.944 20.51-18.204 42.476-3.538 92.48 8.33 146.45 15.17 212.985"
									fill="none"
									stroke="#000"
									stroke-width="20"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>`,
	spock: `	<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 876.325 876.325"
								height="200"
								width="200"
								class="spock transition"
							>
								<path
									d="M866.325 438.162a428.162 428.162 0 0 1-428.163 428.163A428.162 428.162 0 0 1 10 438.162 428.162 428.162 0 0 1 438.162 10a428.162 428.162 0 0 1 428.163 428.162zm-215.961-218.66c-45.325 72.466-53.428 148.35-78.492 207.791M374.664 157.27c23.565 41.229 29.579 175.99 42.475 250m125.24 19.168c25.04-3.913 36.01 9.37 45.05 25.32m-195.168-25.07c15.596-22.457 32.562-20.273 49.757-13.957m-77.09 161.824c68.303-6.792 107.65 30.16 120.398 107.29M325.513 846.589l-.607-99.514c-70.376-63.372-84.47-86.154-108.01-125-23.884-36.311-91.482-56.464-111.65-95.874-18.383-40.373.981-57.424 29.126-62.5 32.84-5.641 49.42.8 61.894 7.888 41.666 24.272 101.431 73.43 120.145 66.141 10.019-162.28-.437-226.742-3.64-325.85.207-33.774 19.748-53.097 61.893-54.611 16.151-50.898 80.908-54.353 84.951-15.777l35.801 242.112 81.31-205.097c18.642-38.158 88.9-15.065 73.638 40.995-4.427 29.11-13.996 15.338-12.014 22.312 42.844-2.636 55.746 9.884 56.338 35.592-81.538 239.28-27.912 195.915-39.684 205.712 10.312-6.949 2.436 100.581-6.372 126.517-21.75 95.853-45.92 85.005-67.658 118.022l1.214 111.65"
									fill="none"
									stroke="#000"
									stroke-width="20"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>`,
};

const addChoiceSVG = (playerChoice, computerChoice) => {
	let computerInsertedHTML;
	let playerInsertedHTML;

	choices.forEach((choice) => {
		if (playerChoice === "rock") {
			playerInsertedHTML = chosenOption.rock;
		}
		if (computerChoice === "rock") {
			computerInsertedHTML = chosenOption.rock;
		}
		if (playerChoice === "paper") {
			playerInsertedHTML = chosenOption.paper;
		}
		if (computerChoice === "paper") {
			computerInsertedHTML = chosenOption.paper;
		}
		if (playerChoice === "scissors") {
			playerInsertedHTML = chosenOption.scissors;
		}
		if (computerChoice === "scissors") {
			computerInsertedHTML = chosenOption.scissors;
		}
		if (playerChoice === "lizard") {
			playerInsertedHTML = chosenOption.lizard;
		}
		if (computerChoice === "lizard") {
			computerInsertedHTML = chosenOption.lizard;
		}
		if (playerChoice === "spock") {
			playerInsertedHTML = chosenOption.spock;
		}
		if (computerChoice === "spock") {
			computerInsertedHTML = chosenOption.spock;
		}

		choice.style.pointerEvents = "none";

		computerChosen.innerHTML = computerInsertedHTML;
		playerChosen.innerHTML = playerInsertedHTML;

		computerChosen.classList.add("showed-option");
		playerChosen.classList.add("showed-option");

		setTimeout(() => {
			computerChosen.classList.remove("showed-option");
			playerChosen.classList.remove("showed-option");
			choice.style.pointerEvents = "auto";
		}, 3000);
	});
};

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
	let playerChoice;
	if (!e.target.parentElement.parentElement.dataset.option) {
		playerChoice = e.target.parentElement.dataset.option; // if svg is clciked
	} else {
		playerChoice = e.target.parentElement.parentElement.dataset.option; // if path is clicked
	}
	addChoiceSVG(playerChoice, computerChoice);
	const winner = getWinner(playerChoice, computerChoice);
	message.innerHTML = "";
	message.classList = "message";
	if (winner === "draw") {
		message.innerHTML = `It's a draw`;
		message.classList.add("yellow");
		computerChosen.querySelector("svg path").style.stroke = "gold";
		playerChosen.querySelector("svg path").style.stroke = "gold";
	} else if (winner === "player") {
		message.innerHTML = `<span>${winner}<span> won the round!`;
		message.classList.add("green");
		playerChosen.querySelector("svg path").style.stroke = "green";
		computerChosen.querySelector("svg path").style.stroke = "orangered";
	} else if (winner === "computer") {
		message.innerHTML = `<span>${winner}<span> won the round!`;
		message.classList.add("red");
		playerChosen.querySelector("svg path").style.stroke = "orangered";
		computerChosen.querySelector("svg path").style.stroke = "green";
	}
	playSounds(playerChoice, computerChoice);
	showWinner(winner, playerChoice, computerChoice);
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
		message.innerHTML = `<span>${winner}<span> won the match!`;
		if (winner === "computer") {
			message.classList.add("red");
		} else if (winner === "player") {
			message.classList.add("green");
		}
	} else {
		return;
	}
};

const togglePlay = () => {
	if (rulesAudio.paused) {
		rulesAudio.play();
	} else {
		rulesAudio.pause();
	}
};

const resetGame = () => {
	scores.player = 0;
	playerScore.textContent = scores.player;
	scores.computer = 0;
	computerScore.textContent = scores.computer;
	message.textContent = "";
};

//Event Listeners
choices.forEach((choice) => {
	choice.addEventListener("click", play);
});

resetBtn.addEventListener("click", resetGame);
rulesBtn.addEventListener("click", togglePlay);
