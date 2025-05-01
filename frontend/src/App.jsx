import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import { MainContent } from './components/MainContent/MainContent.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FAQSection from './components/FAQ/Faq.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import DataPage from './components/DataPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PasswordResetForm from './components/PasswordResetForm.jsx';
import SetNewPassword from './components/setNewPassword.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import Projects from './components/Projects/Projects.jsx';

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
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reset-password" element={<PasswordResetForm />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route
          path="/data"
          element={
            <ProtectedRoute>
              <DataPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
