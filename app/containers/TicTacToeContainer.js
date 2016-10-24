var React = require('react');
var TicTacToe = require('../components/TicTacToe');
var ticEngine = require('../helpers/ticTacToe'); 

const winningMoves = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
];

var checkVictory = function(board) {
    for(var i = 0; i < winningMoves.length; i++) {
        var candidateArray = winningMoves[i]; // [1,2,3], [4,5,6], etc...
        var place1 = candidateArray[0];
        var place2 = candidateArray[1];
        var place3 = candidateArray[2];
        var markerA = board[place1];
        var markerB = board[place2];
        var markerC = board[place3];
        
        if(markerA && markerA == markerB && markerA == markerC) {
            return true;
        }		
    }
};

var checkTie = function(board) { //checks if every square is occupied         
    for (var position in board) {        
        if(!board[position]) {
            return false;
        }
    }
    return true;
};

var commenceTurn = function(board) {	
    if (checkVictory(board)) {
        //this.awardVictory(this.currentPlayer);
        console.log("someone won. Resetting Board...");        
    } else if (checkTie(board)) {
        console.log("Tie. Resetting Board...");        
    }
};

var TicTacToeContainer = React.createClass({
    getInitialState: function() {
        return {
            playerScore: 0,
            botScore: 0,
            finished: false,
            board: {
                1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''
            }
        };
    },
    handleButtonClick: function(e) {        
        const board = this.state.board;
        board[e] = "X";
        this.setState({
            board: board
        });                
        if (checkVictory(board)) {
            this.setState({
                playerScore: this.state.playerScore++,
                finished: true
            });
            this.disableBoard();
        } else if (checkTie(board)) {
            this.setState({                
                finished: true
            });
        } else {
            this.botExecuteMove();
        }
    },    
    botExecuteMove: function() {
        const board = this.state.board;
        var keepRunning = true;
        while (keepRunning) {
            var randomPlace = Math.floor(Math.random() * (9)) + 1; //1 to 9
            if (!board[randomPlace]) {
                board[randomPlace] = "O";
                keepRunning = false;
            }                        
        }
        if (checkVictory(board)) {
            this.setState({
                botScore: this.state.botScore++,
                finished: true
            });
            this.disableBoard();
        } else if (checkTie(board)) {
            this.setState({                
                finished: true
            });
        }       
    },
    disableBoard: function() {
        const board = this.state.board;
        for (var position in board) {
            if(!board[position]) {
                board[position] = '-'
            }
        }
        this.setState({
            board: board
        });        
    },
    render: function () {
        return <TicTacToe
                playerScore={this.state.playerScore}
                botScore={this.state.botScore}
                board={this.state.board}
                buttonClick={this.handleButtonClick}/>
    }
});

module.exports = TicTacToeContainer;