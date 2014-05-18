var level = new Array(9);
var winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var currentTurn = 1;
var gameRunning = true;
var gameWinner = 0;

$(document).ready(function(){
	clearLevel();
	updateLevel();
		
		$( ".lf0" ).click(function() {if (gameRunning) setLevelField(0, currentTurn); else resetGame(); });
		$( ".lf1" ).click(function() {if (gameRunning) setLevelField(1, currentTurn); else resetGame(); });
		$( ".lf2" ).click(function() {if (gameRunning) setLevelField(2, currentTurn); else resetGame(); });
		$( ".lf3" ).click(function() {if (gameRunning) setLevelField(3, currentTurn); else resetGame(); });
		$( ".lf4" ).click(function() {if (gameRunning) setLevelField(4, currentTurn); else resetGame(); });
		$( ".lf5" ).click(function() {if (gameRunning) setLevelField(5, currentTurn); else resetGame(); });
		$( ".lf6" ).click(function() {if (gameRunning) setLevelField(6, currentTurn); else resetGame(); });
		$( ".lf7" ).click(function() {if (gameRunning) setLevelField(7, currentTurn); else resetGame(); });
		$( ".lf8" ).click(function() {if (gameRunning) setLevelField(8, currentTurn); else resetGame(); });
		$( ".levelField").click(function() { updateLevel(); }); 

	});

function updateLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		if (level[i] === 0) $(".lf" + i).css("background-color", "#a4a4a4");
		else if (level[i] == 1) $(".lf" + i).css("background-color", "#3ce6c2"); 
		else if (level[i] == 2) $(".lf" + i).css("background-color", "#e0002e");
	}

	if (gameIsTie()) {
		gameRunning = false;
		gameWinner = 4;
	}

	if (checkForVictory(1) == true) {
		gameRunning = false;
		gameWinner = 1;
	}
	
	else if (checkForVictory(2) == true) {
		gameRunning = false;
		gameWinner = 2;
	}

	if(gameWinner == 0) {
		$(".victoryDisplay").html('<p><p>');
	}

	if(gameWinner == 0 && !gameRunning) {
		$(".victoryDisplay").html('<p><p>');
		$( ".level")
			.slideToggle( 700 )
			.animate({ left: "-=500" }, 1500 )
			.animate({ top: "-=60px" }, 100 )
			.slideToggle( "fast" )
			.animate({ left: "+=500" }, 1500 )
	}

	if(gameWinner == 1 ) {
		$(".level").animate({
			top: '+=80px'
		}, 1000, function () {
			$(".victoryDisplay").html('<p class="blueVictory">Blue has won!</p>');
		});
		$(".level").animate({top : '-=20px'}, 500);
	}

	if(gameWinner == 2 ) {
		$(".level").animate({
			top: '+=80px'
		}, 1000, function () {
			$(".victoryDisplay").html('<p class="redVictory">Red has won!<p>');
		});
		$(".level").animate({top : '-=20px'}, 500);
	}
	
	if(gameWinner == 4 ) {
		$(".level").animate({
			top: '+=80px'
		}, 1000, function () {
			$(".victoryDisplay").html('<p class="tieVictory">The game is a tie!</p>');
		});
		$(".level").animate({top : '-=20px'}, 500);
	}
}

function checkForVictory (playerToCheck) {
	for (var i = winningMoves.length - 1; i >= 0; i--) {
		if (level[winningMoves[i][0]] == playerToCheck && level[winningMoves[i][1]] == playerToCheck && level[winningMoves[i][2]] == playerToCheck ) return true;
	}
	return false;
}

function gameIsTie() {
	var gameIsTieVar = true;
	for (var i = level.length - 1; i >= 0; i--) {
		if (level[i] == 0) gameIsTieVar = false;
	}
	return gameIsTieVar;
}

function setLevelField(levelField, value) {
	if (level[levelField] === 0) {
		level[levelField] = value;
		changeTurn();
	}
}

function resetGame (){
	gameWinner = 0;
	clearLevel();
	updateLevel();	
	gameRunning = true;
}

function clearLevel () {
	for (var i = level.length - 1; i >= 0; i--) level[i] = 0; 
}

function changeTurn () {
	if (currentTurn == 1) currentTurn = 2; 
	else if (currentTurn == 2) currentTurn = 1;
	else console.log("invalid current turn"); 
}