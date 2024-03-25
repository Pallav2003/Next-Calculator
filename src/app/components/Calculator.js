// src/components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const clearResult = () => {
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={clearResult} className="clear">AC</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
      <style jsx>{`
        .calculator {
          width: 300px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid black;
          border-radius: 5px;
        }
        .result {
          font-size: 24px;
          margin-bottom: 10px;
          text-align: right;
          padding: 10px;
          background: pink;
          border: 1px solid black;
          border-radius: 3px;
        }
        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 5px;
        }
        button {
          padding: 10px;
          font-size: 20px;
          border: 1px solid #ccc;
          border-radius: 3px;
          background: green;
          cursor: pointer;
        }
        .clear {
          grid-column: span 2;
        }
      `}</style>
    </div>
  );
};

export default Calculator;
