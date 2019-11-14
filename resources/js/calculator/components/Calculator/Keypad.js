import React from 'react';
import PropTypes from 'prop-types';
const Keypad = (props) => {

    const handleOnDigit = (e) => {
        props.onDigit(e.target.value);
    };
 
    return (
        <div className="keypad">
            <div className="keypad-row">
                <button className="" value="clear-all" onClick={props.onClearAll}>CE</button>
                <button className="" value="clear" onClick={props.onClear}>C</button>
                <button className="" value="backspace" onClick={props.onDelete}>&larr;</button>
                <button className="" value="+-" onClick={props.onToggleSign}>&plusmn;</button>
                <button className="" value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button className="" value="7" onClick={handleOnDigit}>7</button>
                <button className="" value="8" onClick={handleOnDigit}>8</button>
                <button className="" value="9" onClick={handleOnDigit}>9</button>
                <button className="" value="&radic;" onClick={props.onSquareRoot}>&radic;</button>
                <button className="" value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="" value="4" onClick={handleOnDigit}>4</button>
                <button className="" value="5" onClick={handleOnDigit}>5</button>
                <button className="" value="6" onClick={handleOnDigit}>6</button>
                <button className="" value="%" onClick={props.onPercent}>&#37;</button>
                <button className="" value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="" value="1" onClick={handleOnDigit}>1</button>
                <button className="" value="2" onClick={handleOnDigit}>2</button>
                <button className="" value="3" onClick={handleOnDigit}>3</button>
                <button className="" value="gt" onClick={props.onGrandTotal}>GT</button>
                <button className="" value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row">
                <button className="" value="0" onClick={handleOnDigit}>0</button>
                <button className="" value="00" onClick={handleOnDigit}>00</button>
                <button className="" value="000" onClick={handleOnDigit}>000</button>
                <button className="" value="." onClick={props.onDecimalPoint}>.</button>
                <button className="px-5" value="=" onClick={props.onEquals}>=</button>
            </div>
        </div>
    );
};

Keypad.defaultProps = {
    onDigit: digit => alert(digit),
    onClear: () => alert('clear'),
    onClearAll: () => alert('clear-all'),
    onDelete: () => alert('delete'),
    onAdd: () => alert('add'),
    onEquals: () => alert('equals'),
    onDecimalPoint: () => alert('.'),
    onSubtract: () => alert('subtract'),
    onToggleSign: () => alert('+/-'),
    onDivide: () => alert('/'),
    onMultiply: () => alert('*')
};

Keypad.propTypes = {
    onDigit: PropTypes.func,
    onClear: PropTypes.func,
    onClearAll: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onEquals: PropTypes.func,
    onDecimalPoint: PropTypes.func,
    onSubtract: PropTypes.func,
    onDivide: PropTypes.func,
    onMultiply: PropTypes.func,
    onToggleSign: PropTypes.func
};

export default Keypad;