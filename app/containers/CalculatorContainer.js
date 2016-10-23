var React = require('react');
var Calculator = require('../components/Calculator');

var CalculatorContainer = React.createClass({
    getInitialState: function() {
        return {
            result: 0,
            operand: '',
            operation: ''
        }
    },
    handleNumberClick: function(value, e) {
        console.log(value);
        // this.setState({
        //     result: 0
        // });
    },
    handleDecimalClick: function(e) {
        console.log(e);
    },
    handleOperatorClick: function(e) {
        console.log(e);
    },
    render: function () {
        return <Calculator 
                onNumberClick={this.handleNumberClick}
                onDecimalClick={this.handleDecimalClick}
                onOperatorClick={this.handleOperatorClick}/>
    }
});

module.exports = CalculatorContainer;

var Calc = function (container, buttons, output) {
    var that = this;
    this.result = 0;
    this.operand = '';
    this.operation = '';        

    this.buttons = $(buttons);
    this.output = $(output);
    this.container = container;
    
    $("#buttontable tr td").click(function(event) {
        that.on_button_pressed(event);
    })
};
Calc.prototype = {
    constructor: Calc,
    apply_and_set_operation: function (next_op) {
        if (next_op === 'C') {
            this.result = 0;
            this.operand = '';
            this.operation = '';
            return;
        }
        if (this.operand !== '') {
            switch (this.operation) {
                case '':
                    this.result = +this.operand;
                    break;
                case '+':
                    this.result += +this.operand;
                    break;
                case '-':
                    this.result -= +this.operand;
                    break;
                case '*':
                    this.result *= +this.operand;
                    break;
                case '/':
                    this.result /= +this.operand;
                    break;
            }
        }
        this.operation = next_op !== '=' ? next_op : '';
        this.operand = '';
    },
    add_input: function (character) {
        if (character === '.') {
            this.operand += this.operand === '' ? '0.' : '.';
        } else if (character >= '0' && character <= '9') {                
            this.operand += character;
        } else {
            this.apply_and_set_operation(character);
        }
    },
    get_operand: function () {
        return this.operand === '' ? this.result : this.operand;
    },
    on_input: function (character) {          
        this.add_input(character);
        //console.log(this.output);
        //this.output.value = this.get_operand();
        $("#output").val(this.get_operand());
    },
    on_button_pressed: function (ev) {            
        if (ev !== null && ev.target !== undefined && ev.target.value !== undefined) {
            this.on_input(ev.target.value);
        }
    }        
};