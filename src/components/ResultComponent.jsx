import React from 'react';

const ResultComponent = (props) => {

  const home = () => {
    props.pageProp(0);
    props.setScore(0)
  };

  const scorePercentage = (props.score / 5) * 100;

  return (
    <div className='main3'>
      <h2 className='result-head'>Result</h2>
      <div className="box3">
        <h2 className="score">Your score is {scorePercentage}%</h2>
        <div className="details">
          <div className="numberofq for-detail">
            <h4 className="d1">Total no of questions</h4>
            <h4 className='no1'>5</h4>
          </div>
          <div className="numberofq for-detail">
            <h4 className="d1">Number of corrected answers</h4>
            <h4 className='no1'>{props.score}</h4>
          </div>
        </div>
      </div>
      <div className="result-button-grp">
        <button className="result-buttons b2" onClick={home}>Back to home</button>
      </div>
    </div>
  );
};

export default ResultComponent;
