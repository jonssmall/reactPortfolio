var React = require('react');
var Link = require('react-router').Link
var PropTypes = React.PropTypes;

function NavLink(props) {
    return (
        <Link to={props.path} className="mdl-navigation__link">            
            <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">
                {props.iconName}
            </i>
            {props.text}            
        </Link>
    )
};

//Todo: why isn't this throwing errors
NavLink.proptypes = {
    path: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

module.exports = NavLink;