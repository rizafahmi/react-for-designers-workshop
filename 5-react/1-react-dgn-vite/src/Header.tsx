import React from 'react';

type Prop = {
  children: React.ReactNode
}

function Header({ children }: Prop) {
  return (
    <header>
      {children}
    </header>
  )
}

export default Header;