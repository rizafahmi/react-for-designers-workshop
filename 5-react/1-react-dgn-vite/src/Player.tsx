import React, { useState } from 'react';
  
import { PlayerT } from './lib/types.d';

function Player({ name, score = 10}: PlayerT) {
	const [total, setTotal] = useState(10)
	const [show, toggleShow] = useState(true)
	const [status, setStatus] = useState({status: 'OK'})
	
  return (
    <div className="player">
      <div className="name">
        {name}
      </div>
      <div className="playerScore">
        <button onClick={() => setTotal(total - 10)} className="button decrement">-</button>
        <span className="score">{total}</span>
        <button onClick={() => setTotal(total + 10)} className="button increment">+</button>
      </div>
    </div>
  )
}

export default Player