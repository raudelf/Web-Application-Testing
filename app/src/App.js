import React, { useState } from 'react';
import './App.css';

export const addCount = initialValue => {
  return initialValue + 1
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

  if (strikeCount > 2) {
    setStrikeCount(0);
    setBallCount(0);
    setOutCount(addCount(outCount));
  }

  if (outCount > 2) {
    setOutCount(0);
    setStrikeCount(0);
    setBallCount(0);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Scoreboard App</h1>
      </header>
      <div className='scoreboard'>
        <div className='topRow'>
          <div className='home Box'>
            <h1 className='homeName'>HOME</h1>
            <div className='home Count'>{homeScore}</div>
          </div>
          <div className='inning Box'>
            <h1>INNING</h1>
            <div className='inning Count'>{inningCount}</div>
          </div>
          <div className='away Box'>
            <h1 className='awayName'>AWAY</h1>
            <div className='away Count'>{awayScore}</div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='ballCount Box'>
            <h1 className='ballName'>BALL</h1>
            <div className='ball Count'>{ballCount}</div>
          </div>
          <div className='strike Box'>
            <h1 className='strikeName'>STRIKE</h1>
            <div className='strike Count'>{strikeCount}</div>
          </div>
          <div className='out Box'>
            <h1 className='outName'>OUT</h1>
            <div className='out Count'>{outCount}</div>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div className='bottomButtons'>
          <button className='ballBtn' onClick={() => setBallCount(addCount(ballCount))}>Ball</button>
          <button className='strikeBtn' onClick={() => setStrikeCount(addCount(strikeCount))}>Strike</button>
          <button className='outBtn' onClick={() => setOutCount(addCount(outCount))}>Out</button>
        </div>
        <button>Hit</button>
      </div>
    </div>
  );
}

export default App;
