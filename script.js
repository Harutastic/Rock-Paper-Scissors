let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.textContent = userScore;
	computerScore_span.textContent = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.textContent = computerScore;
	userScore_span.textContent = userScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lost...`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} equals ${convertToWord(userChoice)}${smallUserWord}. It's a draw.`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300)
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}


function main() {
	rock_div.addEventListener('click', () => game("r"));
		game("r");


	paper_div.addEventListener('click', () => game("p"));

	scissors_div.addEventListener('click', () => game("s"));
}

main();