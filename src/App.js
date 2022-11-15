import React from 'react'
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import "./App.css"
import TiTopButton from './components/TiTopButton'
const App = () => {
  return (
    <BrowserRouter>
    <TiTopButton id={Home}  />
    <Routes>
      <Route  path='*' element={<Home  />} />
      <Route  path='/' element={<Home  />} />
      <Route path='/Portfolio' element={<Portfolio />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App