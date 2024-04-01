import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../container/HomeContainer'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Bookmark App</h1>
      </header>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/settings'
            element={
              <div>
                <h1>Settings</h1>
                <p>Settings page</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
