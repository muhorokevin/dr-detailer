import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


// ⏱️ Session timeout setup (30 mins)
const TIMEOUT_DURATION = 1000 * 60 * 30;

const getLastLogin = () => {
  return parseInt(localStorage.getItem("admin-last-login") || "0");
};

const isSessionExpired = () => {
  return Date.now() - getLastLogin() > TIMEOUT_DURATION;
};

const isLoggedIn = () => {
  const localAuth = localStorage.getItem("admin-auth") === "true";
  const sessionAuth = sessionStorage.getItem("admin-auth") === "true";

  if (localAuth && isSessionExpired()) {
    // Session expired → clear login
    localStorage.removeItem("admin-auth");
    localStorage.removeItem("admin-last-login");
    return false;
  }

  return localAuth || sessionAuth;
};

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
