import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import { MainContent } from './components/MainContent/MainContent.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FAQSection from './components/FAQ/Faq.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import DataPage from './components/DataPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <>
      <NavBar menuOpen={false} setMenuOpen={() => {}} />
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
        <Route path="/login" element={<LoginForm />} />
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
    </>
  );
}

export default App;
