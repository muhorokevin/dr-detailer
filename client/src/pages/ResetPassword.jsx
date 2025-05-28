// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/admin/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Reset failed");
      } else {
        setMessage("Password reset successfully. You can now login.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleReset}
        className="bg-gray-900 p-6 rounded shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Reset Password</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-400 text-center">{message}</p>}

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
