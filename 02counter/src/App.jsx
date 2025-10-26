import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  const addValue = ()=>{
    setcounter(counter + 1)

  }

  const removeValue = ()=>{
    if(counter > 0 ){
      setcounter(counter - 1)
    }
    
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add values</button>
    <br />
    <button
    onClick={removeValue}
    >Remove values</button>
    </>
  )
}

export default App
