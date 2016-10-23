var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    output: {
        textAlign: 'right',
        fontSize: '3em',
        paddingRight: '10px',
        color: '#000'
    },
    calcCard: {
        width: '300px',
        padding: '10px',
        margin: '0 auto',
        position: 'relative'
    },
    button: {
        margin: '2px',
        height: '64px',
        fontSize: '1.5em'
    }
};

var makeButtonClasses = (props) => {
    let baseClasses = [
        'calc-button', 
        'op-button',
        'mdl-button',
        'mdl-js-button',
        'mdl-button--raised',
        'mdl-js-ripple-effect' ];
        
    if (props.long) baseClasses.push('long-button');
    baseClasses.push(props.accent ? 'mdl-button--accent' : 'mdl-button--colored');

    return baseClasses.join(' ');
};

function Button(props) {    
    if (props.handler) var boundClick = props.handler.bind(null, props.value);
    return (
        <button style={styles.button}
            className={makeButtonClasses(props)}
            onClick={boundClick}>
            {props.value}
        </button>
    )
};

function Output() {
    return (
        <input style={styles.output} 
            id="calc-output" 
            className="mdl-textfield__input" 
            type="text" value="0" 
            maxLength="9" 
            disabled />
    )
};

function Calculator(props) {
    return (
        <div style={styles.calcCard} className="container mdl-card mdl-shadow--2dp">
            <div className="row">
                <div style={{padding:0}} className="mdl-textfield mdl-js-textfield">
                    <Output />
                </div>
            </div>
            <div className="row">
                <Button value="C" accent="true" />
                <Button value="+/-" accent="true" />
                <Button value="%" accent="true" />
                <Button value="/" accent="true" />
            </div>
            <div className="row">
                <Button value="7" handler={props.onNumberClick}/>
                <Button value="8" />
                <Button value="9" />
                <Button value="X" accent="true" />
            </div>
            <div className="row">
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
                <Button value="-" accent="true" />
            </div>
            <div className="row">
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
                <Button value="+" accent="true" />
            </div>
            <div className="row">
                <Button value="0" long="true" />                
                <Button value="." />
                <Button value="=" accent="true" />
            </div>           
        </div>
    )
}

module.exports = Calculator;