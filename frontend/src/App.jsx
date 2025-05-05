import './styles/app.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import { MainContent } from './components/MainContent/MainContent.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FAQSection from './components/FAQ/Faq.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import DataPage from './components/DataPage/DataPage.jsx';
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';
import PasswordResetForm from './components/PasswordManagement/PasswordResetForm.jsx';
import SetNewPassword from './components/PasswordManagement/setNewPassword.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import Projects from './components/Projects/Projects.jsx';
import Services from './components/Services/Services.jsx';
import PromotionalBanner from './components/PromotionalBanner/PromotionalBanner.jsx';
import Dashboard from "./pages/Dashboard";

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
              <Services />
              <PromotionalBanner />
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
        <Route path="/dashboard" element={<Dashboard />} />


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
