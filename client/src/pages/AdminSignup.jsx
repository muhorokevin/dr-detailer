import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://dr-detailer-backend.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.message || "Signup failed");
        return;
      }

      navigate("/admin/login");
    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="bg-gray-900 p-6 rounded shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Admin Signup</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          required
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold"
        >
          Register Admin
        </button>
      </form>
    </div>
  );
};

export default AdminSignup;
