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
            </div>
            <div className="mdl-cell mdl-cell--4-col">
                <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                    <div className="mdl-tabs__tab-bar">
                        <a href="#about" className="mdl-tabs__tab is-active">About</a>
                        <a href="#calculator" className="mdl-tabs__tab">Calculator</a>
                        <a href="#tic-tac-toe" className="mdl-tabs__tab">TicTacToe</a>                        
                    </div>

                    <div className="mdl-tabs__panel is-active" id="about">
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--12-col">
                                <About />
                                 { /* <ShortenerContainer /> */ }
                            </div>
                        </div>
                    </div>
                    <div className="mdl-tabs__panel" id="calculator">
                        <div className="mdl-cell">
                            <CalculatorContainer />
                        </div>
                    </div>
                    <div className="mdl-tabs__panel" id="tic-tac-toe">
                        <div className="mdl-cell">
                            <TicTacToeContainer />
                        </div>
                    </div>                    
                </div>                
            </div>
            <div className="mdl-cell mdl-cell--4-col">                
            </div>
        </div>
    )
};

module.exports = Home;