import React, { useState } from "react";

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
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 absolute w-full z-10">
        <img src="/logo-01.png" alt="Dr. Detailer Logo" className="h-10" />
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li><a href="#catalogue" className="hover:text-red-500">Catalogue</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/gwagon.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Car Looking Its Best</h1>
          <a href="#booking" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">BOOK APPOINTMENT</a>
        </div>
      </div>

      <div id="booking" className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Schedule Service</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <select name="service_type" value={formData.service_type} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Service</option>
            <option value="exterior">Exterior Detail</option>
            <option value="interior">Interior Detail</option>
          </select>
          <select name="car_type" value={formData.car_type} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Car Type</option>
            <option value="saloon">Saloon</option>
            <option value="suv">SUV</option>
          </select>

          <input type="text" name="car_details" placeholder="Car Make & Plate" value={formData.car_details} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white col-span-2" />
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />

          <select name="time" value={formData.time} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white">
            <option value="">Select Time</option>
            <option value="9:00">7:00 AM</option>
            <option value="11:00">10:00 AM</option>
            <option value="1:00">1:00 PM</option>
            <option value="3:00">4:00 PM</option>
          </select>

          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="p-3 rounded bg-gray-800 text-white" />

          <div className="col-span-2">
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-bold">Continue</button>
          </div>
        </form>

        {success && <p className="text-green-400 font-semibold text-center mt-6">✅ Booking successful!</p>}
        {error && <p className="text-red-400 font-semibold text-center mt-6">❌ {error}</p>}
      </div>
    </div>
  );
};

export default Booking;
