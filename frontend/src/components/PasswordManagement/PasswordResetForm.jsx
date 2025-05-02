import { useState } from 'react';

export default function PasswordResetForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (email === "user@example.com") {
      setMessage(
        `Reset link sent! Click here to continue: ` +
        `http://localhost:5173/set-new-password?token=abc123`
      );
          } else {
      setError("This email is not registered.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Reset Password
        </h2>

        {message && <p className="text-green-400 text-sm text-center mb-4">{message}</p>}
        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        <label className="block mb-2 text-sm text-white">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
