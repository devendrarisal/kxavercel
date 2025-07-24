import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
<nav>
  <li><Link to='about-us'>About Us</Link></li>
  <li><Link to='about-company'>About Company</Link></li>
</nav>
      <Outlet />

    </div>
  )
}

export default About
