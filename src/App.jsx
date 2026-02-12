import React from 'react'
import "./App.css"

import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Education from './pages/education'
import Contact from './pages/contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default App
