let active = "#61d4b3";
let notActive = "#ff0000";
class PigGame {
	#status;
	#point;
	#score;
	constructor(stat) {
		this.#status = stat;
		this.#point = 0;
		this.#score = 0;
	}
	get getStatus() {
		return this.#status;
	}

	set setStatus(flag) {
		this.#status = flag;
	}
	get getPoint() {
		return this.#point;
	}
	set setPoint(p) {
		if (p == 0) {
			this.#point = 0;
		} else if (this.#point <= 100) {
			this.#point += p;
		} else {
			throw new Error("Points Are Out of range");
		}
	}

	get getScore() {
		return this.#score;
	}

	set setScore(sc) {
		this.#score += sc;
	}

	reset(stat) {
		this.#status = stat;
		this.#point = 0;
		this.#score = 0;
	}
}

const player1 = new PigGame(true);
const player2 = new PigGame(false);

console.log(player1.getScore);

count = 0;
document.querySelector(".btn-1").addEventListener("click", () => {
	count = Math.round(Math.random() * 5 + 1);
	if (player1.getStatus) {
		document.querySelector(".player1-status").style.fill = active;
		document.querySelector(".player2-status").style.fill = notActive;
		if (count == 1) {
			player1.setPoint = 0;
			player1.setStatus = false;
			player2.setStatus = true;
			document.querySelector(".player1-point").textContent = player1.getPoint;
			document.querySelector(".dice").src = "";
		} else {
			player1.setPoint = count;
			document.querySelector(".dice").src = "./dice/dice-" + count + ".png";
			document.querySelector(".player1-point").textContent = player1.getPoint;
		}
	} else if (player2.getStatus) {
		document.querySelector(".player2-status").style.fill = active;
		document.querySelector(".player1-status").style.fill = notActive;
		if (count == 1) {
			player2.setPoint = 0;
			player2.setStatus = false;
			player1.setStatus = true;

			document.querySelector(".player2-point").textContent = player2.getPoint;
			document.querySelector(".dice").src = "";
		} else {
			player2.setPoint = count;
			document.querySelector(".dice").src = "./dice/dice-" + count + ".png";
			document.querySelector(".player2-point").textContent = player2.getPoint;
		}
	}
});

document.querySelector(".btn-2").addEventListener("click", () => {
	if (player1.getStatus) {
		document.querySelector(".player2-status").style.fill = active;
		document.querySelector(".player1-status").style.fill = notActive;
		player1.setScore = player1.getPoint;
		document.querySelector(".player1-score").textContent =
			"SCORE : " + player1.getScore;
		player1.setPoint = 0;

		document.querySelector(".player1-point").textContent = player1.getPoint;
		player1.setStatus = false;
		player2.setStatus = true;
	} else if (player2.getStatus) {
		document.querySelector(".player1-status").style.fill = active;
		document.querySelector(".player2-status").style.fill = notActive;
		player2.setScore = player2.getPoint;
		document.querySelector(".player2-score").textContent =
			"SCORE : " + player2.getScore;
		player2.setPoint = 0;
		document.querySelector(".player2-point").textContent = player2.getPoint;
		player1.setStatus = true;
		player2.setStatus = false;
	}

	if (player1.getScore >= 100) {
		document.querySelector(".displayWinner").textContent = "PLAYER 1";
		document.querySelector(".message").style.display = "block";
	} else if (player2.getScore >= 100) {
		document.querySelector(".displayWinner").textContent = "PLAYER 2";
		document.querySelector(".message").style.display = "block";
	}
});

document.querySelector(".reset-btn").addEventListener("click", () => {
	player1.reset(true);
	player2.reset(false);

	document.querySelector(".message").style.display = "none";

	document.querySelector(".player1-point").textContent = player1.getPoint;
	document.querySelector(".player2-point").textContent = player2.getPoint;

	document.querySelector(".player1-score").textContent =
		"SCORE : " + player1.getScore;
	document.querySelector(".player2-score").textContent =
		"SCORE : " + player2.getScore;
	document.querySelector(".dice").src = "";
});
