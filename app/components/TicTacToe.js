var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    button: {
        margin: '4px',
        height: '90px',
        width: '90px',
        fontSize: '1.5em'
    }
};

function Marker(props) {    
    return (
        <button disabled={props.occupied} 
                style={styles.button}
                onClick={props.handler.bind(null, props.position)}
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            {props.marker}                    
        </button>
    )
}

function TicTacToe(props) {    
    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                Tic Tac Toe (naive AI)
            </div>
            <div className="mdl-card__supporting-text">
                <div className="row">
                    <Marker handler={props.buttonClick} occupied={false} position={1} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={2} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={3} marker={''}/>
                </div>
                <div className="row">
                    <Marker handler={props.buttonClick} occupied={false} position={4} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={5} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={6} marker={''}/>
                </div>
                <div className="row">
                    <Marker handler={props.buttonClick} occupied={false} position={7} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={8} marker={''}/>
                    <Marker handler={props.buttonClick} occupied={false} position={9} marker={''}/>
                </div>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                Player: {props.playerScore} AI: {props.botScore}
            </div>
        </div>
    )
}

module.exports = TicTacToe;