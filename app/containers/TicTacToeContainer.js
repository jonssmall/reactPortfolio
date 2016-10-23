var React = require('react');
var TicTacToe = require('../components/TicTacToe');
var ticEngine = require('../helpers/ticTacToe');


var TicTacToeContainer = React.createClass({
    getInitialState: function() {
        return {
            playerScore: 0,
            botscore: 0
        }
    },
    handleButtonClick: function(e) {        
        console.log(e);
    },
    render: function () {
        return <TicTacToe
                playerScore={this.state.playerScore}
                botScore={this.state.botscore}
                buttonClick={this.handleButtonClick}/>
    }
});

module.exports = TicTacToeContainer;