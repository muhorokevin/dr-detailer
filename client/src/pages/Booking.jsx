import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    car_type: "",
    car_details: "",
    date: "",
    time: "",
    addons: [],
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        addons: checked
          ? [...prev.addons, value]
          : prev.addons.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dr-detailer-backend.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service_type: "",
          car_type: "",
          car_details: "",
          date: "",
          time: "",
          addons: [],
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 fixed w-full z-50 max-w-screen-xl mx-auto left-0 right-0">
        <img src="/logo-01.png" alt="Dr. Detailer Logo" className="h-10" />
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
          <li><Link to="/catalogue" className="hover:text-red-500 transition">Catalogue</Link></li>
          <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="relative h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/gwagon.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Premium Mobile Detailing</h1>
          <a href="#booking" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition">BOOK APPOINTMENT</a>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Schedule Your Appointment</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <select name="service_type" value={formData.service_type} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Service</option>
            <option value="exterior">Exterior Detail</option>
            <option value="interior">Interior Detail</option>
            <option value="full">Full Detail</option>
          </select>

          <select name="car_type" value={formData.car_type} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Car Type</option>
            <option value="saloon">Saloon</option>
            <option value="suv">SUV / Crossover</option>
          </select>

          <input
            type="text"
            name="car_details"
            placeholder="Car Make & Plate"
            value={formData.car_details}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white col-span-2"
          />

          <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />

          <select name="time" value={formData.time} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Time</option>
            <option value="7:00">7:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="1:00">1:00 PM</option>
            <option value="4:00">4:00 PM</option>
          </select>

          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />

          <div className="col-span-2">
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-bold">Submit Booking</button>
          </div>
        </form>

        {success && <p className="text-green-400 font-semibold text-center mt-6">✅ Booking successful!</p>}
        {error && <p className="text-red-400 font-semibold text-center mt-6">❌ {error}</p>}
      </div>
    </div>
  );
};

export default Booking;
