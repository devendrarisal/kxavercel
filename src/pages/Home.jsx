import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
 
const Home = () => {
  const [count,setCount]=useState(0)
const handleClick=()=>{
  setCount(count+1)
}
const handleDecrement=()=>{
  setCount(count-1)
}
const handleReset=()=>{
  setCount(0)
}
  return (
    <div className='text-center space-x-4 w-40 justify-center  space-y-8 mt-10 bg-gray-400 text-white'>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Home
