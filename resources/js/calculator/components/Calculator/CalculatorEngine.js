const math = require('mathjs');

let currentValue = '';
let register = [];
let history = [];
let result = '';
let grandTotal = '';
let newNumber = true;
let digit = 0;

class CalculatorEngine {
    
    constructor(){
        history = [],
        register = [];
        currentValue = '';
        result = '';
        grandTotal = '';
        newNumber = false;
        digit = 0;
    }

    inputDigit(digit) {
        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }
        
        if (result !== '') {
            result = '';
            currentValue = '';            
        }

        if(newNumber){
            currentValue = digit;
            newNumber = false;
        } else {
            currentValue += digit;
        }

        
    }

    inputDecimal() {
        if (result !== '') {
            result = '';
            currentValue = '';         
        }

        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    clear() {
        currentValue = '';
        register = [];
        result = '';
    }

    clearAll() {
        currentValue = '';
        register = [];
        result = '';
        grandTotal = '';
        history = [];
    }

    clearHistory() {
        history = [];
    }

    delete() {
        if (currentValue === '') {
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
    }

    add() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('+');

        currentValue = '';
    }

    subtract() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('-');

        currentValue = '';
    }

    multiply() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    divide() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('/');
        
        currentValue = '';
    }

    squareRoot() {
        if (currentValue === '') {
            return;
        }
        currentValue = parseFloat(math.sqrt(Number(currentValue)).toFixed(10)).toString();
        newNumber = true;

    }

    percent() {
        if (currentValue === '') {
            return;
        }
        register.push(currentValue+'/100');
        const expression = register.join(' ');

        result = math.eval(expression);
        currentValue = result.toString();
        history.splice(0, 0, { expression, result });
        register = [];

    }

    grandTotal() {
        if (currentValue === '') {
            return;
        }

        grandTotal = Number(grandTotal) + Number(currentValue);
    }

    equals() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);

        const expression = register.join(' ');

        result = math.eval(expression);
        currentValue = result.toString();
        history.splice(0, 0, { expression, result });
        register = [];
        
    }

    loadHistory(index) {
        currentValue = history[index].result.toString();
    }

    toggleSign() {
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue() {
        return currentValue;
    }

    getExpression() {
        return register.join(' ');
    }

    getHistory() {        
        return history;
    }

    getResult() {
        return result;
    }
    
    getGrandTotal() {
        return grandTotal;
    }
}

export default CalculatorEngine;