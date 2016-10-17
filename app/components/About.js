var React = require('react');
var PropTypes = React.PropTypes;
var SocialLink = require('./SocialLink');

function About(props) {
    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                About Me
            </div>
            <div className="mdl-card__supporting-text">
                Full-stack web developer with over 2 years of professional experience in .NET and Javascript technologies.
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    View Resume
                </a>                
                <SocialLink url="https://github.com/jonssmall/" icon="github" />
                <SocialLink url="https://github.com/jonssmall/" icon="linkedin" />
                <SocialLink url="http://codepen.io/jonssmall/pens/public/" icon="codepen" />
            </div>
        </div>
    )
}

module.exports = About;