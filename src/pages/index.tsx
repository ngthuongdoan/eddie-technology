import React, { FunctionComponent } from 'react'
import logo from './logo.svg'

const Index: FunctionComponent = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default Index
