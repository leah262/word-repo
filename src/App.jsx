import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Keyboard from './components/keyboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let idol = 789;

  return (
    <>
      <Keyboard></Keyboard>
    </>
  )
}

export default App
