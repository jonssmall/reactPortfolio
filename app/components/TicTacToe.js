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
        <button disabled={props.marker} 
                style={styles.button}
                onClick={props.handler.bind(null, props.position)}
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            {props.marker}                    
        </button>
    )
}

function TicTacToe(props) {
    let markers = [];
    for (var position in props.board) {            
        markers.push(<Marker handler={props.buttonClick} 
                        key={position} 
                        position={position} 
                        marker={props.board[position]}/>);
    }    
    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                Tic Tac Toe (naive AI)
            </div>
            <div className="mdl-card__supporting-text">                                            
                {markers}
            </div>
            <div className="mdl-card__actions mdl-card--border">
                Player: {props.playerScore} AI: {props.botScore}
            </div>
        </div>
    )
}

module.exports = TicTacToe;