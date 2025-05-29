import React from "react";
import { Link } from "react-router-dom";

const services = {
  maintenance: [
    {
      title: "Weekly Maintenance Wash",
      desc: "Gentle exterior wash, tire shine, light interior wipe.",
      saloon: 2000,
      suv: 3000,
    },
    {
      title: "Bi-Weekly Maintenance Wash",
      desc: "Foam exterior clean, vacuum, dash wipe, tire shine.",
      saloon: 4000,
      suv: 6000,
    },
  ],
  detailing: [
    {
      title: "Exterior Detail",
      desc: "Hand wash, clay bar, polish, tire dress, wax/ceramic spray.",
      saloon: 8000,
      suv: 10000,
    },
    {
      title: "Interior Detail",
      desc: "Vacuum, steam sanitize, glass polish, scent & panel care.",
      saloon: 10000,
      suv: 12000,
    },
    {
      title: "Full Detail",
      desc: "Inside + outside detail with all protective treatments.",
      saloon: 18000,
      suv: 22000,
    },
  ],
  addons: [
    { title: "Ceramic Coating", saloon: 10000, suv: 13000 },
    { title: "Paint Correction", saloon: 2500, suv: 3000 },
    { title: "Leather Protection", saloon: 2000, suv: 3000 },
    { title: "Engine Bay Detailing", saloon: 1500, suv: 2000 },
  ],
};

export default function Catalogue() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo-01.png" alt="Dr. Detailer Logo" className="h-10" />
          <ul className="flex space-x-6 font-medium text-sm">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/catalogue" className="text-red-500 font-bold">Catalogue</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services Catalogue</h1>

        {/* MAINTENANCE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Maintenance Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.maintenance.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded border border-gray-800 shadow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                <div className="flex justify-between text-sm">
                  <span className="bg-gray-800 px-3 py-1 rounded">Saloon: <span className="text-red-500 font-bold">Ksh {item.saloon}</span></span>
                  <span className="bg-gray-800 px-3 py-1 rounded">SUV: <span className="text-red-500 font-bold">Ksh {item.suv}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DETAILING */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Detailing Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.detailing.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded border border-gray-800 shadow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                <div className="flex justify-between text-sm">
                  <span className="bg-gray-800 px-3 py-1 rounded">Saloon: <span className="text-red-500 font-bold">Ksh {item.saloon}</span></span>
                  <span className="bg-gray-800 px-3 py-1 rounded">SUV: <span className="text-red-500 font-bold">Ksh {item.suv}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ADD-ONS */}
        <section className="mb-28">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Add-On Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.addons.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded border border-gray-800 shadow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="bg-gray-800 px-3 py-1 rounded">Saloon: <span className="text-red-500 font-bold">Ksh {item.saloon}</span></span>
                  <span className="bg-gray-800 px-3 py-1 rounded">SUV: <span className="text-red-500 font-bold">Ksh {item.suv}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
