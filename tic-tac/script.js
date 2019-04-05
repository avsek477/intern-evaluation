var scoreX = 0;
var scoreO = 0;
var turn = "X";
var winner;
function startGame() {
		
			for (var i = 1; i <= 9; i = i + 1) {
				clearBox(i);
			}
		
			if (Math.random() < 0.5) {
				turn = "O";
			}
			winner = null;
			setMessage(turn + " gets to start.");
		}
		
		function setMessage(msg) {
			document.getElementById("message").innerText = msg;
		}
		
		function nextMove(square) {
			if (winner != null) {
				setMessage(winner + " already won the game.");
			} else if (square.innerText == "") {
				square.innerText = turn;
				switchTurn();
			} else {
				setMessage("That square is already used.");
			}
		}
		
		function switchTurn() {
		
			if (checkForWinner(turn)) {
				setMessage("Congratulations, " + turn + "!  You win!");
				winner = turn;
        		updateScore(winner);

			} else if (turn == "X") {
				turn = "O";
				setMessage("It's " + turn + "'s turn!");
			} else {
				turn = "X";
				setMessage("It's " + turn + "'s turn!");
			}
		}
		
		function checkForWinner(move) {
			var result = false;
			if (checkRow(1, 2, 3, move) || 
				checkRow(4, 5, 6, move) ||
				checkRow(7, 8, 9, move) || 
				checkRow(1, 4, 7, move) ||
				checkRow(2, 5, 8, move) ||
				checkRow(3, 6, 9, move) ||
				checkRow(1, 5, 9, move) ||
				checkRow(3, 5, 7, move)) {
				
				result = true;
			}
			return result;
		}
		
		function checkRow(a, b, c, move) {
			var result = false;
			if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
				result = true;
			}
			return result;
		}
		
		function getBox(number) {
			return document.getElementById("s" + number).innerText;
		}
		
		function clearBox(number) {
			document.getElementById("s" + number).innerText = "";
		}
		
		function updateScore(winner) {
    if (winner == 'X') {
        scoreX++;
        document.getElementById("scoreX").innerHTML = scoreX;
    } else {
        scoreO++;
        document.getElementById("scoreO").innerHTML = scoreO;
    }
}
