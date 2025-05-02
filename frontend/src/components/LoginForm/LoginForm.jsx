import { useState } from 'react';
import { useAuth } from '../Auth/authContext.jsx';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';

    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoginError('');
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate async auth
    setTimeout(() => {
      const validEmail = 'user@example.com';
      const validPassword = 'password123';

      if (email === validEmail && password === validPassword) {
        setLoginError('');
        login(); // context auth
        navigate('/data'); // redirect
      } else {
        setLoginError('Incorrect email or password');
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        // ./background-login.jpg
        backgroundImage: "url('/solar-farm-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white border border-white/10 z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Log In
        </h2>

        {loginError && (
          <p className="text-red-400 text-sm text-center mb-4">{loginError}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="mt-4 text-sm text-center">
          <a href="/reset-password" className="text-yellow-400 hover:underline">
            Forgot password?
          </a>
        </p>

        <p className="text-center text-sm mt-4 text-white">
          Not a user?{' '}
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
}
