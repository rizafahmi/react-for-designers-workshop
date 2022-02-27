import React, { useState } from 'react';
  
import { PlayerT } from './lib/types.d';
import useTheme, { themes } from "./ThemeContext";

type Prop = PlayerT & {
  handleIncrement: (name: string) => void;
}

function Player({ name, score = 10, handleIncrement }: Prop) {
  //debugger
  const [theme, setTheme] = useTheme()

  return (
    <div className={`player ${theme.color} ${theme.background}`}>
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