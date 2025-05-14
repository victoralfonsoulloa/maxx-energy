import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/authContext.jsx'; // ✅ this path is correct

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const customClassName = ({ isActive }) => {
    const baseClasses = 'text-gray-300 hover:text-white transition-colors';
    const activeClasses = isActive
      ? 'font-bold bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent'
      : '';
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <img
              className="h-8 w-auto"
              src="/maxx-energy-logo.png"
              alt="Maxx Energy Logo"
            />
          </div>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={customClassName}>
              Homepage
            </NavLink>
            <NavLink to="/about" className={customClassName}>
              About Us
            </NavLink>
            <NavLink to="/projects" className={customClassName}>
              Projects
            </NavLink>

            {isAuthenticated && (
              <>
                <NavLink to="/dashboard" className={customClassName}>
                  Dashboard
                </NavLink>
                <NavLink to="/data" className={customClassName}>
                  Data
                </NavLink>
                <NavLink to="/profile" className={customClassName}>
                  Profile
                </NavLink>
              </>
            )}

            <NavLink to="/contact" className={customClassName}>
              Contact Us
            </NavLink>

            {isAuthenticated ? (
              <button onClick={logout} className={customClassName}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" className={customClassName}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
