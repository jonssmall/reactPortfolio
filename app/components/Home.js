var React = require('react');
var PropTypes = React.PropTypes;
var About = require('./About');
var ShortenerContainer = require('../containers/ShortenerContainer');

function Home(props) {
    return (
        <div>
            <div className="mdl-cell mdl-cell--4-col">
                <About />                                
            </div>
            <div className="mdl-cell mdl-cell--8-col">
                <ShortenerContainer />
            </div>
        </div>
    )
};

module.exports = Home;