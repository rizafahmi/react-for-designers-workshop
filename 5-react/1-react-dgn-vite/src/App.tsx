  import React, { useState } from 'react';
  
  import Players from './Players';
  import Form from './Form';
  import './App.css';
  
  function App() {
    const [players, setPlayers] = useState([
      { name: "Fathurozak Buhari", score: 30 },
      { name: "Rizki Romadhoni", score: 25 },
      { name: "Dewi Febriyanti", }
    ])

    function sendData(name: string) {
      console.log("Form submit. Name: ", name)
      setPlayers([...players, {name}])
    }
    
        return (
      <div className="container">
        <h1>Feedloop Leaderboard</h1>
        <Players players={players} />
        <Form sendData={sendData} />
      </div>
    )
  }
  
  export default App
