// utils/fetchWithAuth.js
export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (res.status === 403 || res.status === 401) {
    localStorage.removeItem("token");
    alert("Session expired. Please log in again.");
    window.location.href = "/login";
    throw new Error("Authentication failed");
  }

  return res.json();
};
