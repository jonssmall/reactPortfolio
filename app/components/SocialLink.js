var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    iconContainer: {
        display: "inline-block",
        height: "40px",
        width: "40px",
        marginLeft: "3px",
        marginRight: "3px"
    }
}

function SocialLink(props) {
    return (
        <a href={props.url} target="_blank">
            <div style={styles.iconContainer}>
                <img style={{width:"40px"}} src={"app/assets/" + props.icon + ".svg"} />
            </div>
        </a>        
    )
};

SocialLink.proptypes = {
    // url: PropTypes.string.isRequired,
    // icon: PropTypes.string.isRequired,    
};

module.exports = SocialLink;