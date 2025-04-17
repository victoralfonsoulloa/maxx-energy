import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import FAQSection from './components/FAQ/Faq.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import DataPage from './components/DataPage.jsx';
import { AuthProvider } from './components/authContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContent />
                <FAQSection />
                <ContactForm />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/data"
            element={
              <ProtectedRoute>
                <DataPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

