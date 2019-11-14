// PACKAGE REFERENCES
import React, { Component } from 'react';


// PROJECT REFERENCES
import Display from './Display';
import Keypad from './Keypad';
import History from './History';
import CalculatorEngine from './CalculatorEngine';




import {
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

// INITIALIZATION
const calculator = new CalculatorEngine();


export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expression: '',
            value: '',
            history: [],
            grandTotal: '0',
            showHistory: false
        };

        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnClearAll = this.handleOnClearAll.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubtract = this.handleOnSubtract.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnDecimalPoint = this.handleOnDecimalPoint.bind(this);
        this.handleOnPercent = this.handleOnPercent.bind(this);
        this.handleonSquareRoot = this.handleonSquareRoot.bind(this);
        this.handleOnGrandTotal = this.handleOnGrandTotal.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnToggleSign = this.handleOnToggleSign.bind(this);
        this.handleOnHistorySelected = this.handleOnHistorySelected.bind(this);
        this.handleOnToggleHistory = this.handleOnToggleHistory.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
        this.handleOnCopy = this.handleOnCopy.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }


    handleOnAdd() {
        calculator.add();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnClear() {
        calculator.clear();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnClearAll() {
        calculator.clearAll();

        this.setState(() => ({
            expression: calculator.getExpression(),
            history: calculator.getHistory(),
            value: calculator.getValue().toString(),
            grandTotal: calculator.getGrandTotal().toString()
        }));
    }


    handleOnClearHistory() {
        calculator.clearHistory();

        this.setState(() => ({
            history: calculator.getHistory(),
            showHistory: false
        }));
    }


    handleOnDecimalPoint() {
        calculator.inputDecimal();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnDelete() {
        calculator.delete();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }


    handleOnDigit(number) {
        calculator.inputDigit(number);

        this.setState(() => ({
            value: calculator.getValue()
        }));
    }


    handleOnDivide() {
        calculator.divide();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleonSquareRoot() {

         calculator.squareRoot();

         this.setState(() => ({
            value: calculator.getValue().toString()
         }));
    }

    handleOnPercent() {
        calculator.percent();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnGrandTotal() {
        calculator.grandTotal();

        this.setState(() => ({
            grandTotal: calculator.getGrandTotal().toString()
        }));
    }


    handleOnEquals() {
        calculator.equals();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getResult().toString(),
            history: calculator.getHistory()
        }));
    }


    handleOnHistorySelected(index) {
        calculator.loadHistory(index);

        this.setState(prevState => ({
            expression: prevState.history[index].expression,
            value: calculator.getValue().toString()
        }));
    }


    handleOnMultiply() {
        calculator.multiply();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnSubtract() {
        calculator.subtract();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnToggleHistory() {
        this.setState(prevState => ({ showHistory: !prevState.showHistory }));
    }


    handleOnToggleSign() {
        calculator.toggleSign();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }

    handleOnCopy() {
        var copyText = document.getElementById("gt");
        copyText.select();
        copyText.setSelectionRange(0, 99)
        document.execCommand("copy");
        document.getElementById("gtText").classList.add("text-success");
        document.getElementById("gtText").innerHTML="Copied to clipboard";
        setTimeout(function(){ 
            document.getElementById("gtText").classList.remove("text-success");
            document.getElementById("gtText").innerHTML="Grand Total";
        }, 500);
      }

    handleOnKeyPress(e) {
      
      var keyPressed = e.keyCode;
      if(keyPressed>95 && keyPressed < 106){
        calculator.inputDigit(e.key);
        this.setState(() => ({
            value: calculator.getValue()
        }));
      } else if (keyPressed == 106) {
        this.handleOnMultiply();
      } else if (keyPressed == 107) {
        this.handleOnAdd();
      } else if (keyPressed == 109) {
        this.handleOnSubtract();
      } else if (keyPressed == 111) {
        this.handleOnDivide();
      } else if (keyPressed == 13) {
        document.getElementById("gt").focus();
        this.handleOnEquals();
      } else if (keyPressed == 8) {
        this.handleOnDelete();
      } else if (keyPressed == 110) {
        this.handleOnDecimalPoint();
      } else if (keyPressed == 46) {
        this.handleOnClear();
      } else {
         return;
      }
    
      }

    render() {
        return (
            <div className="row">
                <div className="calculator col-11 mx-auto" onKeyDown={this.handleOnKeyPress}>
                    <Display value={this.state.value} expression={this.state.expression} />
                    <div className="">

                        <div className="row my-1">
                            <div className="col-12">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText id="gtText">
                                            Grand Total
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" id="gt" value={this.state.grandTotal} onClick={this.handleOnCopy}/>
                                    <InputGroupText className="btn" onClick={this.handleOnToggleHistory}>
                                        History
                                    </InputGroupText>
                                </InputGroup>
                            </div>

                        </div>

                    </div>
                    {
                        !this.state.showHistory && <Keypad 
                            onDigit={this.handleOnDigit}
                            onAdd={this.handleOnAdd}
                            onSubtract={this.handleOnSubtract}
                            onDivide={this.handleOnDivide}
                            onMultiply={this.handleOnMultiply}
                            onDecimalPoint={this.handleOnDecimalPoint}
                            onSquareRoot={this.handleonSquareRoot}
                            onPercent={this.handleOnPercent}
                            onGrandTotal={this.handleOnGrandTotal}
                            onEquals={this.handleOnEquals}
                            onClear={this.handleOnClear}
                            onClearAll={this.handleOnClearAll}
                            onDelete={this.handleOnDelete}
                            onToggleSign={this.handleOnToggleSign} />
                    }

                    {
                        this.state.showHistory && <History history={this.state.history}
                            onClearHistory={this.handleOnClearHistory}
                            onSelected={this.handleOnHistorySelected} />
                    }


                </div>

            </div>
        );
    }
}