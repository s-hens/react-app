import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './buttons'
import handleButtonClick from './handleButtonClick'
import './App.css'

function App() {
/*
  const handleButtonClick = () => {
    window.location.href = "http://www.google.com";
  }
*/
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello, world!</h1>
      <div>
        <p>This page was made with Vite + React.</p>
        <p>Edit <code>src/App.jsx</code> and save to test Hot Module Replacement (HMR)!</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.<br />
        Or don't, I'm not the boss of you.
      </p>
      <div>
      <Button />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!!!!!" color="blue" fontSize={20} handleClick={handleButtonClick}/>
      </div>

    </>
  )
}

export default App
