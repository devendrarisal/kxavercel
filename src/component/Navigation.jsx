import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <nav>   
            <ul>
              <div className='flex space-x-4'>
              <NavLink to='/'>Home</NavLink>
               <NavLink to='/about'>About</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navigation
