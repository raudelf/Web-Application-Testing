import React from 'react';

const Display = (props) => {
    return (
        <div className='scoreboard'>
        <div className='topRow'>
          <div className='home Box'>
            <h1 className='homeName'>HOME</h1>
            <div className='home Count'>{props.homeScore}</div>
          </div>
          <div className='inning Box'>
            <h1>INNING</h1>
            <div className='inning Count'>{props.inningCount}</div>
          </div>
          <div className='away Box'>
            <h1 className='awayName'>AWAY</h1>
            <div className='away Count'>{props.awayScore}</div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='ballCount Box'>
            <h1 className='ballName'>BALL</h1>
            <div className='ball Count'>{props.ballCount}</div>
          </div>
          <div className='strike Box'>
            <h1 className='strikeName'>STRIKE</h1>
            <div className='strike Count'>{props.strikeCount}</div>
          </div>
          <div className='out Box'>
            <h1 className='outName'>OUT</h1>
            <div className='out Count'>{props.outCount}</div>
          </div>
        </div>
      </div>
    )
}

export default Display;