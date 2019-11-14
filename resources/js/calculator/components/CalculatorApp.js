import React from 'react';
import Calculator from './Calculator/Calculator';
import './../styles/app.scss';
const App = () => (
    <div style={{overflow: 'hidden'}}>
        <div>
            <Calculator />
        </div>
    </div>
);

export default App;
