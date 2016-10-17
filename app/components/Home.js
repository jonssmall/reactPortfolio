var React = require('react');
var PropTypes = React.PropTypes;
var About = require('./About');
var ShortenerContainer = require('../containers/ShortenerContainer');
var Calculator = require('./Calculator');

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
                    <Calculator />
                </div>                  
            </div>
        </div>
    )
};

module.exports = Home;