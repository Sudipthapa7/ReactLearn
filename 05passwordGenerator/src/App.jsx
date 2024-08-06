import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialcharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const copyToCLipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const PasswordGenerator = useCallback((passGenerator) => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890";
    if (specialcharAllowed) str += "!@#$%^&*_+()[]{}<>?~"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, specialcharAllowed, setPassword])
  useEffect(()=>{
    PasswordGenerator()
  }, [length, numberAllowed, specialcharAllowed, PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
          px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full px-3 py-1'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />
          <button
          onClick={copyToCLipboard}
           className='outline-none text-white bg-blue-700
                px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              
               />

            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked= {numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev)=>!prev) }}
               />

            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked= {specialcharAllowed}
              id='numberInput'
              onChange={() => { setSpecialCharAllowed((prev)=>!prev) }}
               />
            <label>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
