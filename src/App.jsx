import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState()
  
  const [Password, setPassword] = useState("")
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charcterAllowed, setcharcterAllowed] = useState(false)
  const PasswordRef =useRef(null)
 // let pass ="fyyu";
 const passwordGenerator = useCallback(
   () => {
  let pass =""; 
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num="0123456789"
  let char="!@#$%^&*()_+][{}|\<>,/?"
  if(numberAllowed){
    str= str+num;
  
  }
  if(charcterAllowed){
    str= str+char;
   
  }

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length +1);
    pass += str.charAt(char)
  }
  setPassword(pass)
   },
   [length , numberAllowed,charcterAllowed,setPassword]
 )
 useEffect(()=>{passwordGenerator()},[length,numberAllowed ,charcterAllowed,passwordGenerator])
 const copyPasswordToClip= useCallback(()=>{

  window.navigator.clipboard.write(Password);
 },[Password])

  return (
    <>
    <h1>Password Generator</h1>
      <div className='container'>
        <div className="box">
          <div className="pass">
            <input type="text" className='paswordhere'value={Password} ref={PasswordRef} />
            <button className='copy'onClick={copyPasswordToClip}>Copy</button>
          </div>
          <input type="range" name="" id="tt" min={6} max={12} onChange={(e)=> setlength(e.target.value)}/> <label >Length</label> ({length})
          <br />
          <input type="checkbox" name="" id="tt" defaultChecked={numberAllowed} onChange={()=> setnumberAllowed( (prev)=>!prev) } /> <label >Numbers Allowed  </label>
          <br />
          <input type="checkbox" name="" id="tt"defaultChecked={charcterAllowed} onChange={()=> setcharcterAllowed( (prev)=>!prev) } /> <label >Characters Allowed </label>
        <br />
          <button id='generatePassword' onClick={passwordGenerator} >Generate Password</button>
        </div>

      </div>
    </>
  )
}
export default App
