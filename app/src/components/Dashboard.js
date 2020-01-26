import React from 'react';
import { addCount, hitBtn } from '../App';

const Dashboard = (props) => {
    return (
        <div className='buttons'>
        <div className='bottomButtons'>
          <button className='ballBtn' onClick={() => props.setBallCount(addCount(props.ballCount))}>Ball</button>
          <button className='strikeBtn' onClick={() => props.setStrikeCount(addCount(props.strikeCount))}>Strike</button>
          <button className='outBtn' onClick={() => props.setOutCount(addCount(props.outCount))}>Out</button>
        </div>
        <button className='hitBtn' onClick={() => hitBtn(props.setBallCount, props.setStrikeCount)}>Hit</button>
      </div>
    )
}

export default Dashboard;