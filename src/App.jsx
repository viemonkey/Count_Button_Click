import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let increase = () => {
    setCount(count + 1);
  }

  let decrease = () => {
    setCount(count - 1);
  } 

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <button onClick={decrease}>Decrease</button>
      <span style={{ padding: 10 }}>{count}</span>
      <button onClick={increase}>Increase</button>
    </div>
  )
}


export default App;
