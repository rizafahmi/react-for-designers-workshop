import React, { useState } from 'react';
  
import { PlayerT } from './lib/types.d';

function Player({ name, score = 10, handleIncrement }: PlayerT) {

  return (
    <div className="player">
      <div className="name">
        {name}
      </div>
      <div className="playerScore">
        <button onClick={() => {}} className="button decrement">-</button>
        <span className="score">{score}</span>
        <button onClick={() => handleIncrement(name)} className="button increment">+</button>
      </div>
    </div>
  )
}

export default Player