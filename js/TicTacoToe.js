var level = new Array(9);
var currentTurn = 1;
var gameRunning = true;
var gameWinner = 0;

function clearLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		level[i] = 0;
	}
}

function checkForVictory (playerToCheck) {
	//horizontal
	if (level[0] == playerToCheck && level[1] == playerToCheck && level[2] == playerToCheck) return true;
	if (level[3] == playerToCheck && level[4] == playerToCheck && level[5] == playerToCheck) return true;
	if (level[6] == playerToCheck && level[7] == playerToCheck && level[8] == playerToCheck) return true;
	//vertical
	if (level[0] == playerToCheck && level[3] == playerToCheck && level[6] == playerToCheck) return true;
	if (level[1] == playerToCheck && level[4] == playerToCheck && level[7] == playerToCheck) return true;
	if (level[2] == playerToCheck && level[5] == playerToCheck && level[8] == playerToCheck) return true;
	//diagonal
	if (level[0] == playerToCheck && level[4] == playerToCheck && level[8] == playerToCheck) return true;
	if (level[2] == playerToCheck && level[4] == playerToCheck && level[6] == playerToCheck) return true;
	//none
	return false;
}

function aiTurn () {

	for (var i = level.length - 1; i >= 0; i--) {
		level[i]
	};
}

function setLevelField(levelField, value) {
	if (level[levelField] === 0) {
		level[levelField] = value;
		changeTurn();
	}
}

function resetGame (){
	gameRunning = true;
	gameWinner = 0;
	showVictory();
	clearLevel();
	updateLevel();
}

function updateLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		
		if(level[i] === 0) {
			$(".lf" + i).css("background-color", "#a4a4a4");
		} 

		else if (level[i] == 1) {
			$(".lf" + i).css("background-color", "#3ce6c2");
		} 

		else if (level[i] == 2) {
			$(".lf" + i).css("background-color", "#e0002e");
		}
	}

	if (checkForVictory(1) == true) {
		gameRunning = false;
		gameWinner = 1;
		showVictory();
	}
	
	else if (checkForVictory(2) == true) {
		gameRunning = false;
		gameWinner = 2;
		showVictory();
	}
}

function changeTurn () {
	if (currentTurn == 1) {
		currentTurn = 2;
	}

	else if (currentTurn == 2) {
		currentTurn = 1;
	}
	else { currentTurn = -1; }
}

function showVictory () {
	if(gameWinner == 0 ) $(".victoryDisplay").html('<p><p>');
	if(gameWinner == 1 ) $(".victoryDisplay").html('<p class="blueVictory">Blue has won!</p>');
	if(gameWinner == 2 ) $(".victoryDisplay").html('<p class="redVictory">Red has won!</p>');
}

$(document).ready(function(){
	clearLevel();
	updateLevel();

		$( ".lf0" ).click(function() {
			if (gameRunning) {
			setLevelField(0, currentTurn);
			updateLevel();
			} 
			else resetGame();
		});

		$( ".lf0" ).click(function() {
			if (gameRunning) {
			setLevelField(0, currentTurn);
			updateLevel();
			} 
			else resetGame();
		});


		$( ".lf1" ).click(function() {
			if (gameRunning) {
			setLevelField(1, currentTurn);
			updateLevel();
			} 
			else resetGame();
		});

		$( ".lf2" ).click(function() {
			if (gameRunning) {
			setLevelField(2, currentTurn);
			updateLevel();
			}
			else resetGame();
		});

		$( ".lf3" ).click(function() {
			if (gameRunning) {
			setLevelField(3, currentTurn);
			updateLevel();
			} 
			else resetGame();

		});

		$( ".lf4" ).click(function() {
			if (gameRunning) {
			setLevelField(4, currentTurn);
			updateLevel();
			} 
			else resetGame();

		});

		$( ".lf5" ).click(function() {
			if (gameRunning) {
			setLevelField(5, currentTurn);
			updateLevel();
			}	 
			else resetGame();
		});

		$( ".lf6" ).click(function() {
			if (gameRunning) {
			setLevelField(6, currentTurn);
			updateLevel();
			} 
			else resetGame();
		});

		$( ".lf7" ).click(function() {
			if (gameRunning) {
			setLevelField(7, currentTurn);
			updateLevel();
			} 
			else resetGame();
		});

		$( ".lf8" ).click(function() {
			if(gameRunning) {
			setLevelField(8, currentTurn);
	 		updateLevel();
			}
			else resetGame();
		});
});
