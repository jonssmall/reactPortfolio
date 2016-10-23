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

function Output(props) {
    return (
        <input style={styles.output} 
            id="calc-output" 
            className="mdl-textfield__input" 
            type="text" value={props.result} 
            maxLength="9" 
            disabled />
    )
};

function Calculator(props) {
    console.log(props);
    return (
        <div style={styles.calcCard} className="container mdl-card mdl-shadow--2dp">
            <div className="row">
                <div style={{padding:0}} className="mdl-textfield mdl-js-textfield">
                    <Output result={props.output}/>
                </div>
            </div>
            <div className="row">
                <Button value="C" accent="true" handler={props.onButtonClick}/>
                <Button value="+/-" accent="true" handler={props.onButtonClick}/>
                <Button value="%" accent="true" handler={props.onButtonClick}/>
                <Button value="/" accent="true" handler={props.onButtonClick}/>
            </div>
            <div className="row">
                <Button value="7" handler={props.onButtonClick}/>
                <Button value="8" handler={props.onButtonClick}/>
                <Button value="9" handler={props.onButtonClick}/>
                <Button value="X" accent="true" handler={props.onButtonClick}/>
            </div>
            <div className="row">
                <Button value="4" handler={props.onButtonClick}/>
                <Button value="5" handler={props.onButtonClick}/>
                <Button value="6" handler={props.onButtonClick}/>
                <Button value="-" accent="true" handler={props.onButtonClick}/>
            </div>
            <div className="row">
                <Button value="1" handler={props.onButtonClick}/>
                <Button value="2" handler={props.onButtonClick}/>
                <Button value="3" handler={props.onButtonClick}/>
                <Button value="+" accent="true" handler={props.onButtonClick}/>
            </div>
            <div className="row">
                <Button value="0" long="true" handler={props.onButtonClick}/>         
                <Button value="." handler={props.onButtonClick}/>
                <Button value="=" accent="true" handler={props.onButtonClick}/>
            </div>           
        </div>
    )
}

module.exports = Calculator;