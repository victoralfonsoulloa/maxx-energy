import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import MainContent from './components/MainContent/MainContent.jsx'

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  )
}

export default App