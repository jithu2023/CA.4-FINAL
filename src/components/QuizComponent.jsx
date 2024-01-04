import React, { useState } from 'react';
import questions from '../questions.js';

import './Component.css'; 

export default function QuestionBox(props) {
  const [index, setIndex] = useState(0);
  const [darkmode, setDarkMode] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const bgStyle = darkmode ? { background: 'rgb(18, 72, 112)' } : {};
  const textColor = highlight ? { color: '#ff0000' } : {};

  const toggleHighlight = () => {
    setHighlight(true);
  };

  const removeHighlight = () => {
    setHighlight(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      props.setScore((prevScore) => prevScore + 1);
    }

    setIndex((prevIndex) => {
      if (prevIndex < 4) {
        return prevIndex + 1;
      } else {
        props.pageProp(2);
        return prevIndex;
      }
    });
  };

  const qBoxStyle = darkmode
    ? {
        backgroundColor: 'rgb(18, 72, 112)',
        color: '#fff',
        border: '1px solid #fff',
      }
    : {
        backgroundColor: 'rgb(235, 224, 228)',
        color: '#000',
        border: '1px solid #000',
      };

  return (
    <>
      <div className="main" style={bgStyle}>
        <div className="nav1">
          <div>
          <h1 className={`kalvium ${darkmode ? 'light-text' : 'dark-text'}`}>
  KALVIUM
</h1>
          </div>
          <div>
            <button className="toggle-theme" onClick={toggleDarkMode}>
              {darkmode ? 'LIGHT' : 'DARK'}
            </button>
          </div>
        </div>

        <div className="q-box" style={qBoxStyle}>
          <h3 className="qno">Question: {[index + 1]} out of 5</h3>
          <h1 className="question" style={textColor}>
            {questions[index].text}
          </h1>

          <div className="option-box">
            {questions[index].options.map((option) => (
              <button 
                key={option.id}
                onClick={() => handleOptionClick(option.isCorrect)}
                className="option"
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="toggle-highlight">
            <button className="highlight" onClick={toggleHighlight}>
              Highlight
            </button>
            <button className="remove-highlight" onClick={removeHighlight}>
              Remove highlight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
