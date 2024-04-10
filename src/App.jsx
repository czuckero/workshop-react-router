import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom"
import './components/Blue'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'


function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/'>Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/blue' element={<Blue></Blue>}/>
          <Route path='/red' element={<Red></Red>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
