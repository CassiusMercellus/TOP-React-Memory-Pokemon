import React, { useState } from 'react';
import CardContainer from './components/CardContainer';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <div className="app">
      <CardContainer />
    </div>
  );
};

export default App;
