var React = require('react');
var PropTypes = React.PropTypes;
var About = require('./About');
var ShortenerContainer = require('../containers/ShortenerContainer');
var CalculatorContainer = require('../containers/CalculatorContainer');
var TicTacToeContainer = require('../containers/TicTacToeContainer');

function Home(props) {
    return (
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
                <div className="mdl-cell">
                    <About />
                </div>                
                <div className="mdl-cell">
                    <ShortenerContainer />
                </div>                                                                                       
            </div>
            <div className="mdl-cell mdl-cell--8-col">
                <div className="mdl-cell">
                    <CalculatorContainer />
                </div>
                <div className="mdl-cell">
                    <TicTacToeContainer />
                </div>      
            </div>
        </div>
    )
};

module.exports = Home;