import React, { useState } from 'react';
import './App.css';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [inningCount, setInningCount] = useState(1);
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  const [outCount, setOutCount] = useState(0);


  return (
    <div className="App">
      <header className="header">
        <h1>Scoreboard App</h1>
      </header>
      <div className='scoreboard'>
        <div className='topRow'>
          <div className='homeBox'>
            <h1 className='homeName'>HOME</h1>
            <div className='homeScore'>{homeScore}</div>
          </div>
          <div className='inningBox'>
            <h1>INNING</h1>
            <div className='inning'>{inningCount}</div>
          </div>
          <div className='awayBox'>
            <h1 className='awayName'>AWAY</h1>
            <div className='awayScore'>{awayScore}</div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='ballCountBox'>
            <h1 className='ballName'>BALL</h1>
            <div className='ballCount'>{ballCount}</div>
          </div>
          <div className='strikeBox'>
            <h1 className='strikeName'>STRIKE</h1>
            <div className='strikeCount'>{strikeCount}</div>
          </div>
          <div className='outBox'>
            <h1 className='outName'>STRIKE</h1>
            <div className='outCount'>{outCount}</div>
          </div>
        </div>
      </div>
      <div className='dashControls'>
      </div>
    </div>
  );
}

export default App;
