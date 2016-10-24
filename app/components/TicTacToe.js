var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    button: {
        margin: '4px',
        height: '90px',
        width: '90px',
        fontSize: '1.5em'
    },
    reset: {
        float: 'right',
        lineHeight: '0px',
        height: '20px'
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

function Reset(props) {         
    return (
        <button style={styles.reset}
                onClick={props.handler}
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            Reset     
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
    if (props.finished) var reset = <Reset handler={props.resetClick}/>;
    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                Tic Tac Toe (naive AI)
            </div>
            <div className="mdl-card__supporting-text">                                            
                {markers}
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <span>Player: {props.playerScore} AI: {props.botScore}</span>
                {reset}
            </div>
        </div>
    )
}

module.exports = TicTacToe;