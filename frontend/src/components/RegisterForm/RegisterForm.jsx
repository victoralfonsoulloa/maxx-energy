import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [registerError, setRegisterError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setRegisterError('');
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate an async registration process
    setTimeout(() => {
      const usedEmail = 'used@example.com'; // Simulate an already registered email

      if (formData.email === usedEmail) {
        setRegisterError('This email is already in use');
      } else {
        // Registration logic here (e.g., API call)
        setRegisterError('');
        navigate('/welcome'); // Redirect to a welcome page or dashboard
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Register
        </h2>
  
        {registerError && (
          <p className="text-red-400 text-sm text-center mb-4">{registerError}</p>
        )}
  
        <div className="mb-4">
          <label className="block mb-1 text-sm text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>
  
        <div className="mb-4">
          <label className="block mb-1 text-sm text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
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
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm mt-4 text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
}