import { useAuth } from './authContext.jsx';

export default function LoginToggle() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="text-right p-4">
      <button
        onClick={isAuthenticated ? logout : login}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
