import React from "react";

import { PlayerT } from "./lib/types.d";
import Player from "./Player";
import "./Players.css";

type Prop = {
  players: PlayerT[];
  setPlayers: (PlayerT[]);
}

function Players({ players, setPlayers }: Prop) {

  async function handleIncrement(id: string, score: number) {
    console.log(`Incrementing ${id}`)
    try {
      await fetch(`https://prod-qore-app.qorebase.io/nuMHyithxxHTIVF/allTopScore/rows/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({score: score + 10})
      });
    } catch (err) {
      console.error(err);
    }
    
    
  }

  return (
    <>
      {players && players.map((player: PlayerT, index: number) => (
        <Player 
          key={index} 
          name={player.name} 
          score={player.score}
          id={player.id}
          handleIncrement={handleIncrement}
        />
      ))}
    </>
  );
}

export default Players;