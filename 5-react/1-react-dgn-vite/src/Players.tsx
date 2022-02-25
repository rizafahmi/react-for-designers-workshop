import React from "react";

import { PlayerT } from "./lib/types.d";
import Player from "./Player";
import "./Players.css";

function Players() {
  const players: PlayerT[] = [
    { name: "Fathurozak Buhari", score: 30 },
    { name: "Rizki Romadhoni", score: 25 },
    { name: "Dewi Febriyanti" },
  ];

  return (
    <>
      {players.map((player) => (
        <Player name={player.name} score={player.score} />
      ))}
    </>
  );
}

export default Players;