import React from 'react'
import './App.css'
import { NavBar } from './Components'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className='flex'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
