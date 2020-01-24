import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

export const addCount = initialValue => {
  return initialValue + 1
}

export const hitBtn = (ball, strike) => {
  ball(0);
  strike(0);
}

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [inningCount, setInningCount] = useState(1);
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  const [outCount, setOutCount] = useState(0);

  if (ballCount > 4) {
    setBallCount(0);
    setOutCount(addCount(outCount))
  }

  if (strikeCount > 3) {
    setStrikeCount(0);
    setBallCount(0);
    setOutCount(addCount(outCount));
  }

  if (outCount > 3) {
    setOutCount(0);
    setStrikeCount(0);
    setBallCount(0);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Scoreboard App</h1>
      </header>
      <Display homeScore={homeScore} inningCount={inningCount} awayScore={awayScore} ballCount={ballCount} strikeCount={strikeCount} outCount={outCount}/>
      <Dashboard setBallCount={setBallCount} setStrikeCount={setStrikeCount} setOutCount={setOutCount} ballCount={ballCount} strikeCount={strikeCount} outCount={outCount}/>
    </div>
  );
}

export default App;
