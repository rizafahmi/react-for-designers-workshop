import React, { useState } from 'react';

import Players from './Players';
import Form from './Form';
import { ThemeProvider } from "./ThemeContext";
import ToggleButton from './ToggleButton';
import './App.css';

function App() {
  const [players, setPlayers] = useState([
    { name: "Fathurozak Buhari", score: 30 },
    { name: "Rizki Romadhoni", score: 25 },
    { name: "Dewi Febriyanti" }
  ]);
  const [showForm, setShowForm] = useState(true);

  function sendData(name: string) {
    setPlayers([...players, {name}]);
  }
  
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Feedloop Leaderboard</h1>
        <ToggleButton />
        <button className="bg-slate-700" onClick={() => setShowForm(!showForm)}>New Player</button>
        <Players players={players} setPlayers={setPlayers} />
        {showForm !== true &&
          <Form sendData={sendData} />
        }
      </div>
    </ThemeProvider>
  )
}

export default App
