import React, { useState } from 'react';
  
import { PlayerT } from './lib/types.d';

type Prop = PlayerT & {
  handleIncrement: (name: string, score: number) => void;
}

function Player({ id, name, score = 10, handleIncrement }: Prop) {
  //debugger

  return (
    <div className={`player`}>
      <div className="name">
        {name}
      </div>
      <div className="playerScore">
        <button onClick={() => {}} className="button decrement">-</button>
        <span className="score">{score}</span>
        <button onClick={() => handleIncrement(id, score)} className="button increment">+</button>
      </div>
    </div>
  )
}

export default Player