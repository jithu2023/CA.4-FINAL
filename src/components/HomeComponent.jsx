import React from 'react';
import './component.css';

function HomeComponent(props) {
  const pageup = () => {
    props.pageProp(1);
  };

  return (
    <div className='body'>
      <div className='reactlogo'></div>
      <h1 className='React'>React</h1>
      <h2 className='quizapp'>Quiz App</h2>
      <button className='playgames' onClick={pageup}>
        Play Games
      </button>
    </div>
  );
}

export default HomeComponent;
