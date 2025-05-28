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
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-white uppercase tracking-wide">
          Book Appointment
        </h2>

        {/* Services Preview */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-6 rounded shadow border border-[#1e1e1e]">
            <h3 className="text-xl font-bold text-white mb-2">Exterior Detail <span className="float-right text-red-500 font-semibold">KSH 6,000</span></h3>
            <p className="text-sm text-gray-400">
              A deep, multi-step exterior service focusing on foam hand wash,
              clay bar treatment, high gloss sealant, and protective wax or ceramic spray.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded shadow border border-[#1e1e1e]">
            <h3 className="text-xl font-bold text-white mb-2">Interior Detail <span className="float-right text-red-500 font-semibold">KSH 3,500</span></h3>
            <p className="text-sm text-gray-400">
              Full interior treatment including deep vacuuming, steam sanitation,
              dashboard and panel conditioning.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <select
              name="service_type"
              value={formData.service_type}
              onChange={handleChange}
              className="w-full bg-[#1c1c1c] text-white border border-gray-700 p-3 rounded"
            >
              <option value="">Service Type</option>
              <option value="exterior">Exterior Detail</option>
              <option value="interior">Interior Detail</option>
            </select>

            <select
              name="car_type"
              value={formData.car_type}
              onChange={handleChange}
              className="w-full bg-[#1c1c1c] text-white border border-gray-700 p-3 rounded"
            >
              <option value="">Car Type</option>
              <option value="saloon">Saloon</option>
              <option value="suv">SUV</option>
            </select>

            <input
              name="car_details"
              value={formData.car_details}
              onChange={handleChange}
              placeholder="Car Make & Plate"
              className="w-full p-3 bg-[#1c1c1c] text-white border border-gray-700 rounded"
            />
          </div>

          <div className="space-y-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-[#1c1c1c] text-white border border-gray-700 rounded"
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 bg-[#1c1c1c] text-white border border-gray-700 rounded"
            >
              <option value="">Select Time</option>
              <option value="9:00">9:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="1:00">1:00 PM</option>
              <option value="3:00">3:00 PM</option>
            </select>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-bold"
            >
              Continue
            </button>
          </div>
        </div>

        {success && (
          <p className="text-green-400 font-semibold text-center mt-6">
            ✅ Booking successful!
          </p>
        )}
        {error && (
          <p className="text-red-400 font-semibold text-center mt-6">
            ❌ {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;
