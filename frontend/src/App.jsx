import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { MainContent } from './components/MainContent/MainContent.jsx'
import FAQSection from './components/FAQ/Faq.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App