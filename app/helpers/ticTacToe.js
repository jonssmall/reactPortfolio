var Player = function(marker) {
	this.marker = marker;
	this.score = 0;
};

Player.prototype.placeMarker = function(square) {	
	if(square.isOccupied()) {
		//TODO: some type of error / blocked action
		console.log("space occupied for square " + square.place);
		return false;
	} else {
		square.marker = this.marker;
		square.squareElement.innerHTML = "<h1>" + this.marker + "</h1>";
		console.log("successfully placed in square " + square.place);		
		return true;
	}
};

Player.prototype.executeMove = function(square) {
	return this.placeMarker(square);
}

var AI = function(marker) {
	Player.call(this, marker);
};

AI.prototype = Object.create(Player.prototype);
AI.prototype.constructor = AI;

AI.prototype.executeMove = function() {
	var stopFlag = false;
	while (!stopFlag) {
		var randomPlace = Math.floor(Math.random() * (9)); //0 to 8
		stopFlag = this.placeMarker(game.board[randomPlace]); //todo: decouple game instance
	}
	return stopFlag;
};

var Game = function() {
	this.currentPlayer = {};
	this.winningMoves = [
		[1,2,3],[4,5,6],[7,8,9],
		[1,4,7],[2,5,8],[3,6,9],
		[1,5,9],[3,5,7]
	];
};

Game.prototype.resetBoard = function() {
	for (var i = 0; i < 9; i++) {		
		var square = this.board[i];
		square.marker = null;
		square.squareElement.innerHTML = "";
	}
};

Game.prototype.awardVictory = function(player) {
	player.score++;
};

Game.prototype.checkVictory = function() {
	for(var i = 0; i < this.winningMoves.length; i++) {
		var candidateArray = this.winningMoves[i]; // [1,2,3], [4,5,6], etc...
		var place1 = candidateArray[0];
		var place2 = candidateArray[1];
		var place3 = candidateArray[2];
		var squareA = this.board[place1 - 1]; // from 1-9 to 0-8
		var squareB = this.board[place2 - 1];
		var squareC = this.board[place3 - 1];

		if(squareA.marker && squareA.marker == squareB.marker && squareA.marker == squareC.marker) {
			return true;
		}		
	}
};

Game.prototype.checkTie = function() {	
	for (var i = 0 ; i < this.board.length; i++) {
		var square = this.board[i];
		if(!square.marker) {
			return false;
		}
	}
	return true;
};

Game.prototype.commenceTurn = function(square) {	
	if (this.currentPlayer.executeMove(square)) { //square arg null and unecessary when AI.executeMove;
		if (this.checkVictory()) {
			this.awardVictory(this.currentPlayer);
			console.log(this.currentPlayer.marker + " won. Resetting Board...");
			this.resetBoard();
			this.currentPlayer = human;
		} else if (this.checkTie()) {
			console.log("Tie. Resetting Board...");
			this.resetBoard();
			this.currentPlayer = human; 
		} else {
			this.currentPlayer = this.currentPlayer == human ? ai : human;
			if(this.currentPlayer == ai) {
				this.commenceTurn();
			}
		}
	} else {
		alert("Space occupied. Pick another.");
	}
};

var game = new Game();
var human = new Player("X");
var ai = new AI("O");
game.currentPlayer = human;