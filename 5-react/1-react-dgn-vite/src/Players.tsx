import React from "react";

import { PlayerT } from "./lib/types.d";
import Player from "./Player";
import "./Players.css";

type Prop = {
  players: PlayerT[];
  setPlayers: (PlayerT[]);
}

function Players({ players, setPlayers }: Prop) {

  function handleIncrement(name: string) {
    console.log(`Incrementing ${name}`)
    
    const updatedPlayers = players.map(function(player) {
      if(player.name == name) {
        if(player.score != undefined)
          player.score = player.score + 10
        else
          player.score = 20
      }
      return player
    })
    
    setPlayers(updatedPlayers)
  }

  return (
    <>
      {players.map((player: PlayerT, index: number) => (
        <Player 
          key={index} 
          name={player.name} 
          score={player.score}
          handleIncrement={handleIncrement}
        />
      ))}
    </>
  );
}

export default Players;