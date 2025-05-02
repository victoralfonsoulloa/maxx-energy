import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  // 🛡️ Token validation — must be inside the component
  if (!token || token !== "abc123") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-gray-900">
        <h1 className="text-3xl font-bold text-red-400">
          Invalid or expired reset link.
        </h1>
      </div>
    );
  }

  const validatePassword = (pwd) => {
    return pwd.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg("Your password has been reset.");
      setTimeout(() => navigate("/login"), 1500);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Set New Password
        </h2>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
        {successMsg && <p className="text-green-400 text-sm text-center mb-4">{successMsg}</p>}

        <label className="block mb-2 text-sm text-white">New Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
        />

        <label className="block mb-2 text-sm text-white">Confirm Password</label>
        <input
          type="password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition disabled:opacity-50"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
