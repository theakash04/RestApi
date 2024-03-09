import React from 'react'
import './App.css'
import { NavBar } from './Components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './Components/ThemeBtn/Theme'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () =>{
    setThemeMode("light");
  }

  const darkTheme = () =>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    let theme = document.querySelector('html');
    theme.classList.remove("light", "dark")
    theme.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='flex'>
        <NavBar />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App
