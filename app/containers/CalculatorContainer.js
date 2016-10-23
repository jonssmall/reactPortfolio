var React = require('react');
var Calculator = require('../components/Calculator');
var calcEngine = require('../helpers/calc');
var calc = new calcEngine();

var CalculatorContainer = React.createClass({
    getInitialState: function() {
        return {
            output:0
        }
    },
    handleButtonClick: function(value, e) {        
        calc.on_input(value);
        this.setState({
            output: calc.get_operand()
        });
    },
    render: function () {
        return <Calculator
                output={this.state.output}       
                onButtonClick={this.handleButtonClick}/>
    }
});

module.exports = CalculatorContainer;