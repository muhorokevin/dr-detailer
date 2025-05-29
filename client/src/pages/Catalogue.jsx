import React from "react";
import { Link } from "react-router-dom";

const services = {
  maintenance: [
    { title: "Weekly Maintenance Wash", desc: "Gentle exterior wash, tire shine, light interior wipe.", saloon: 1000, suv: 2000 },
    { title: "Bi-Weekly Maintenance Wash", desc: "Foam exterior clean, vacuum, dash wipe, tire shine.", saloon: 2000, suv: 4000 },
  ],
  detailing: [
    { title: "Exterior Detail", desc: "Hand wash, clay bar, polish, tire dress, wax/ceramic spray.", saloon: 5000, suv: 8000 },
    { title: "Interior Detail", desc: "Vacuum, steam sanitize, glass polish, scent & panel care.", saloon: 8000, suv: 10000 },
    { title: "Full Detail", desc: "Complete inside & out: foam wash, steam interior, polish, seal.", saloon: 13000, suv: 18000 },
  ],
  addons: [
    { title: "Ceramic Coating", saloon: 10000, suv: 13000 },
    { title: "Paint Correction (per panel)", saloon: 2500, suv: 3000 },
    { title: "Leather Protection", saloon: 2000, suv: 3000 },
    { title: "Engine Bay Detailing", saloon: 1500, suv: 2000 },
    { title: "Headlight Restoration", saloon: 2000, suv: 3000 },
    { title: "Interior Steam Cleaning", saloon: 3000, suv: 4000 },
    { title: "Stain Removal", saloon: 2000, suv: 4000 },
    { title: "Odor Removal", saloon: 2000, suv: 3000 },
    { title: "Clay Bar Treatment", saloon: 2500, suv: 3500 },
    { title: "Seat Cleaning", saloon: 3000, suv: 6000 },
  ],
};

const Catalogue = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 fixed w-full z-50 max-w-screen-xl mx-auto left-0 right-0">
        <img src="/logo-01.png" alt="Dr. Detailer Logo" className="h-10" />
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
          <li><Link to="/catalogue" className="text-red-500 font-bold">Catalogue</Link></li>
          <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>
      </nav>

      <div className="pt-28 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Services Catalogue</h1>

        {/* MAINTENANCE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Maintenance Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.maintenance.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded shadow border border-gray-800">
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
              <div key={i} className="bg-[#111] p-6 rounded shadow border border-gray-800">
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
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Add-On Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.addons.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded shadow border border-gray-800">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="bg-gray-800 px-3 py-1 rounded">Saloon: <span className="text-red-500 font-bold">Ksh {item.saloon}</span></span>
                  <span className="bg-gray-800 px-3 py-1 rounded">SUV: <span className="text-red-500 font-bold">Ksh {item.suv}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalogue;
