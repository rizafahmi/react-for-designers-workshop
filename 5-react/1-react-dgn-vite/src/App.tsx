import React, { useEffect, useState } from 'react';

import Players from './Players';
import Form from './Form';
import ToggleButton from './ToggleButton';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [showForm, setShowForm] = useState(true);

  async function getData() {
    try {
      const res = await fetch(`https://prod-qore-app.qorebase.io/nuMHyithxxHTIVF/allTopScore/rows?limit=50&offset=0&$order=asc`)
      const data = await res.json()
      setPlayers(data.nodes);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(function() {
    getData()

  }, [players])


  function sendData(name: string) {
    // @ts-ignore
    setPlayers([...players, {name}]);
  }
  
  return (
    <div className="container">
      <h1>Feedloop Leaderboard</h1>
      <button className="bg-slate-700" onClick={() => setShowForm(!showForm)}>New Player</button>
      <ToggleButton />
      <Players players={players} 
        /* @ts-ignore */ 
        setPlayers={setPlayers} />
      {showForm !== true &&
        <Form sendData={sendData} />
      }
    </div>
  )
}

export default App
