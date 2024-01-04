import React, { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);

  const pageUp = (pageNo) => {
    setPage(pageNo);
  };

  if (page === 0) {
    return <HomeComponent pageProp={pageUp} />;
  } else if (page === 1) {
    return <QuizComponent pageProp={pageUp}setScore={setScore} />;
  } else if (page === 2) {
    return <ResultComponent pageProp={pageUp}score={score} setScore={setScore} />;
  }

 
  return null;
}

export default App;
