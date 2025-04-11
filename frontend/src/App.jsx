import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import AboutUs from './components/AboutUs.jsx';
import DataPage from './components/DataPage'; 

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/data" element={<DataPage />} /> {/* optional */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
