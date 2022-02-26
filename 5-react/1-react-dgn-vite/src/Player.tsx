import React, { useState } from 'react';
  
import { PlayerT } from './lib/types.d';

function Player({ name, score = 10}: PlayerT) {
  const [localScore, setLocalScore] = useState(score);

  return (
    <div className="player">
      <div className="name">
        {name}
      </div>
      <div className="playerScore">
        <button onClick={() => setLocalScore(localScore - 10)} className="button decrement">-</button>
        <span className="score">{localScore}</span>
        <button onClick={() => setLocalScore(localScore + 10)} className="button increment">+</button>
      </div>
    </div>
  )
}

export default Player