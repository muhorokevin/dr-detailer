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
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Book a Detailing Appointment
        </h2>

        {success && (
          <p className="text-green-400 font-semibold text-center mb-4">
            ✅ Booking successful!
          </p>
        )}
        {error && (
          <p className="text-red-400 font-semibold text-center mb-4">
            ❌ {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 bg-gray-900 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 bg-gray-900 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 bg-gray-900 rounded"
          />

          <select
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 text-white rounded"
          >
            <option value="">Select Service</option>
            <option value="maintenance">Maintenance Wash</option>
            <option value="interior">Interior Detail</option>
            <option value="exterior">Exterior Detail</option>
          </select>

          <select
            name="car_type"
            value={formData.car_type}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 text-white rounded"
          >
            <option value="">Select Car Type</option>
            <option value="saloon">Saloon</option>
            <option value="suv">SUV / Crossover</option>
          </select>

          <input
            name="car_details"
            value={formData.car_details}
            onChange={handleChange}
            placeholder="Car Make & Plate (e.g. Premio KCB 123A)"
            className="w-full p-2 bg-gray-900 rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 rounded"
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 rounded"
          >
            <option value="">Select Time</option>
            <option value="9:00">9:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="1:00">1:00 PM</option>
            <option value="3:00">3:00 PM</option>
          </select>

          <div>
            <label className="block text-sm mb-1">Add-ons</label>
            <label className="block">
              <input
                type="checkbox"
                value="Ceramic Coating"
                checked={formData.addons.includes("Ceramic Coating")}
                onChange={handleChange}
              />{" "}
              Ceramic Coating
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Engine Bay Detailing"
                checked={formData.addons.includes("Engine Bay Detailing")}
                onChange={handleChange}
              />{" "}
              Engine Bay Detailing
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-bold"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
