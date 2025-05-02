import React, { useState } from 'react';
import { useAuth } from '../Auth/authContext.jsx'; // Ensure this path is correct

const UserProfile = () => {
  const { isAuthenticated } = useAuth();

  // Mock user data aligned with login credentials
  const mockUserData = {
    name: 'John Doe',
    email: 'user@example.com',
    phone: '123-456-7890',
  };

  // State to manage user data and edit mode
  const [userData, setUserData] = useState(mockUserData);
  const [editMode, setEditMode] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState(''); // 🔥 new success message
  const [isLoading, setIsLoading] = useState(false); // 🔥 new loading indicator

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to validate the form
  const validateForm = () => {
    const errors = {};
    if (!userData.name) errors.name = 'Name is required';
    if (!userData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!userData.phone) errors.phone = 'Phone number is required';
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // 🔥 show loading
    const errors = validateForm();

    setTimeout(() => {
      // simulate saving delay
      if (Object.keys(errors).length === 0) {
        // Simulate saving changes
        setEditMode(false);
        console.log('Profile updated:', userData);
        setSuccessMsg('Profile updated successfully! ✅');
        setFormErrors({});
      } else {
        setFormErrors(errors);
        setSuccessMsg('');
      }
      setIsLoading(false); // 🔥 stop loading
    }, 1000);
  };

  if (!isAuthenticated) {
    return (
      <p className="text-center text-lg text-white">
        Please log in to access your profile.
      </p>
    );
  }

  return (
    <div className="user-profile bg-[#0a0a0a] text-white py-16 px-8 flex flex-col justify-center items-center min-h-screen">
      <div className="container max-w-4xl mx-auto mt-16">
        <div className="profile-info p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
            User Profile
          </h1>

          {/* Success or loading messages */}
          {isLoading && (
            <p className="text-yellow-400 mb-4">Saving changes...</p>
          )}
          {successMsg && <p className="text-green-400 mb-4">{successMsg}</p>}

          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm">{formErrors.phone}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                  setFormErrors({});
                  setSuccessMsg('');
                }}
                className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400 mt-2"
              >
                Cancel
              </button>
            </form>
          ) : (
            <div>
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Phone:</strong> {userData.phone}
              </p>
              <button
                onClick={() => setEditMode(true)}
                className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition disabled:opacity-50
