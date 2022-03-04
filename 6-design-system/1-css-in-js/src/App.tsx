import React from 'react';

import { PrimaryButton, SecondaryButton } from './components/Buttons'
import { GlobalStyle } from './utils/global';

function App() {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <GlobalStyle />    
    </div>
    
  )
}

export default App
