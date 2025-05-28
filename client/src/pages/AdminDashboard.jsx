import React, { useEffect, useState } from "react";
import { unparse } from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const SERVICE_PRICING = {
  maintenance: 1500,
  interior: 9000,
  exterior: 6500,
};

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch bookings", err);
        setLoading(false);
      });
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const matchService =
      !selectedService || booking.service_type === selectedService;
    const matchDate =
      !selectedDate || booking.date?.slice(0, 10) === selectedDate;
    return matchService && matchDate;
  });

  const totalRevenue = filteredBookings.reduce((sum, booking) => {
    const base = SERVICE_PRICING[booking.service_type] || 0;
    const addonsTotal = (booking.addons || []).length * 2000;
    return sum + base + addonsTotal;
  }, 0);

  const handleExportCSV = () => {
    const dataToExport = filteredBookings.map((b) => ({
      Name: b.name,
      Phone: b.phone,
      Service: b.service_type,
      Car: b.car_details,
      Date: b.date,
      Time: b.time,
      Addons: (b.addons || []).join(", "),
    }));

    const csv = unparse(dataToExport);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "dr_detailer_bookings.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 📊 Chart data
  const serviceRevenueData = ["maintenance", "interior", "exterior"].map((service) => {
    const total = filteredBookings
      .filter((b) => b.service_type === service)
      .reduce((sum, b) => {
        const base = SERVICE_PRICING[service] || 0;
        const addons = (b.addons || []).length * 2000;
        return sum + base + addons;
      }, 0);
    return { name: service.charAt(0).toUpperCase() + service.slice(1), revenue: total };
  });

  const serviceCountData = ["maintenance", "interior", "exterior"].map((service) => ({
    name: service.charAt(0).toUpperCase() + service.slice(1),
    count: filteredBookings.filter((b) => b.service_type === service).length,
  }));

  const pieColors = ["#ef4444", "#10b981", "#3b82f6"];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Admin Dashboard - Bookings
      </h1>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : filteredBookings.length === 0 ? (
        <p className="text-center text-gray-400">No bookings found.</p>
      ) : (
        <>
          <div className="mb-6 text-center space-y-4">
            <p className="text-lg text-white font-semibold">
              Total Revenue:{" "}
              <span className="text-green-400">
                KSh {totalRevenue.toLocaleString()}
              </span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded"
              >
                <option value="">All Services</option>
                <option value="maintenance">Maintenance</option>
                <option value="interior">Interior Detail</option>
                <option value="exterior">Exterior Detail</option>
              </select>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded"
              />

              <button
                onClick={handleExportCSV}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                📤 Export CSV
              </button>

              <button
                  onClick={() => {
                  localStorage.removeItem("admin-auth");
                   window.location.href = "/admin/login";
                 }}
                 className="bg-red-800 hover:bg-red-900 text-white px-3 py-2 rounded">
                   Logout
                </button>

            </div>
          </div>

          {/* 📊 Charts */}
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-900 p-4 rounded shadow">
              <h2 className="text-xl font-semibold text-center mb-4">Revenue by Service</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={serviceRevenueData}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-900 p-4 rounded shadow">
              <h2 className="text-xl font-semibold text-center mb-4">Booking Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceCountData}
                    dataKey="count"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {serviceCountData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 border border-gray-700 rounded">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Car</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Add-ons</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-gray-700">
                    <td className="p-3">{booking.name}</td>
                    <td className="p-3">{booking.phone}</td>
                    <td className="p-3 capitalize">{booking.service_type}</td>
                    <td className="p-3">{booking.car_details}</td>
                    <td className="p-3">{booking.date}</td>
                    <td className="p-3">{booking.time}</td>
                    <td className="p-3">
                      {booking.addons && booking.addons.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
