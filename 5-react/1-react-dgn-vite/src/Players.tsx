import React from "react";

import { PlayerT } from "./lib/types.d";
import Player from "./Player";
import "./Players.css";

type Prop = {
  players: PlayerT[];
}

function Players({ players }: Prop) {

  return (
    <>
      {players.map((player: PlayerT, index: number) => (
        <Player 
          key={index} 
          name={player.name} 
          score={player.score}
        />
      ))}
    </>
  );
}

export default Players;