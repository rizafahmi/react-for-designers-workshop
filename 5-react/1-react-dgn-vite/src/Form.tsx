import React, { useEffect, useState } from 'react';

import './Form.css';

type Prop = {
  sendData: (name: string) => void
}

function Form({ sendData }: Prop) {
  const [name, setName] = useState("")

  useEffect(function() {
    console.log("Form mounting");
    document.title = `New Player: ${name}`;
    return function() {
      console.log("Form unmounting");
    }
  }, [name])
  
  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    sendData(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Give me some name..." />
      <button type="submit">Save</button>
    </form>
  )
}



export default Form;