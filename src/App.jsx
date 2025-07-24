import React, { useState } from 'react'
import { useRef } from 'react'
const App = () => {
  const [time,setTime]=useState(0)
  const [isRunning,setIsRunning]=useState(false)

const intervalRef=useRef(null)
  const start=()=>{
    if(!isRunning){
      setIsRunning(true);
      intervalRef.current=setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000)
    }
  }

  const stop=()=>{
    if(isRunning){
      clearInterval(intervalRef.current)
      setIsRunning(false)
    }
  }

  const reset=()=>{
    clearInterval(intervalRef.current)
    setIsRunning(false)
    setTime(0)
  }


  const formatTime=(seconds)=>{
    const mins=String(Math.floor(seconds/60)).padStart(2,'0')
    const secs=String(seconds%60).padStart(2,'0')
    return `${mins}:${secs}`
  }
  return (
    <div>
      <h1>Stop watch</h1>

      <br />
      <br />
      <h1>{formatTime(time)}</h1>
      <br />
     <div className='flex space-x-4 '>
     <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
     </div>

      
    </div>
  )
}

export default App
