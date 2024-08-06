import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    counter = counter + 1
    setCounter(counter)
  }
  const subtractValue = () =>{
    if(counter>0) counter = counter-1
    setCounter(counter)
  }
  return (
    <>
   <h1>How hooks work in React</h1>
   <h2>counter value: {counter}</h2> 
    <button
    onClick={addValue}
   >Add Value</button>
   <br />
   <button
   onClick={subtractValue}>Subtract Value</button>
   <p>The value of counter is : {counter}</p>
   </>
   
  )
}

export default App
