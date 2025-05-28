// src/pages/ForgotPassword.jsx
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("https://dr-detailer-backend.onrender.com/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to send reset email");
      } else {
        setMessage("Password reset link sent to your email.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleForgotPassword}
        className="bg-gray-900 p-6 rounded shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Forgot Password</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-400 text-center">{message}</p>}

        <input
          type="email"
          placeholder="Enter your admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
