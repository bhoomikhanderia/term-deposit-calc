import React from 'react';
import './styles/app.scss';
import { TermDepositCalculator } from './components/TermDepositCalculator/TermDepositCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Term Deposit Calculator
      </header>
      <TermDepositCalculator />    
    </div>
  );
}

export default App;
