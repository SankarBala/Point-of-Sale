import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CalculatorApp from './components/App';

 class Calculator extends Component {
    render(){
        return(
            <div>
                <CalculatorApp />
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));