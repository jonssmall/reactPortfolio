var Calc = function () {    
    this.result = 0;
    this.operand = '';
    this.operation = '';                
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
                case 'X':
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
        console.log(this.get_operand());        
    },    
};

module.exports = Calc;