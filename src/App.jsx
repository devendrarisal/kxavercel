import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './component/Navigation'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AboutCompany from './pages/AboutCompany'
import AboutUs from './pages/AboutUs'
const App = () => {
   
    
  return (
    <div>
      <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
     
      <Route path="/about" element={<About />} >
      <Route path="about-company" element={<AboutCompany />} />
      <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
    
    </div>
  )
}

export default App






