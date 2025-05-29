import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans">
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 fixed w-full z-50 max-w-screen-xl mx-auto left-0 right-0">
        <img src="/logo-01.png" alt="Dr. Detailer Logo" className="h-10" />
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
          <li><Link to="/catalogue" className="hover:text-red-500 transition">Catalogue</Link></li>
          <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/gwagon.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight">Experience Premium Mobile Car Detailing</h1>
          <Link to="/booking" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition">Book Appointment</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <img src="/drdetailer01.png" alt="Van Setup" className="rounded shadow-lg border border-gray-700 w-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-red-500">Fully Equipped for Excellence</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">We bring our own electricity and water. Our van is loaded with top-grade equipment and eco-friendly supplies. And yes — we’re insured, professional, and ready to serve.</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-400">
            <li>On-board power and water supply</li>
            <li>Certified and trained staff</li>
            <li>Public liability insurance for peace of mind</li>
            <li>Premium eco-conscious detailing products</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#111] py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <blockquote className="text-xl text-gray-300 italic">“My BMW has never looked better. Professional, reliable, and worth every shilling.”</blockquote>
          <p className="text-gray-400">- Brian K.</p>
          <blockquote className="text-xl text-gray-300 italic">“Top-notch service. Booking was simple and the results? Flawless!”</blockquote>
          <p className="text-gray-400">- Sarah M.</p>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <img src="/google.png" alt="Google Reviews" className="h-6" />
            <span className="text-yellow-400 font-semibold">4.9 / 5.0 (85 reviews)</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 text-center bg-black">
        <h2 className="text-2xl font-bold mb-4">Need help or have questions?</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://wa.me/254728999073" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-bold text-white transition">WhatsApp Us</a>
          <a href="mailto:info@drdetailer.co.ke" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-bold text-white transition">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-gray-800 max-w-screen-xl mx-auto">
        <div>
          <img src="/logo-01.png" alt="Logo" className="mb-4 w-24" />
          <p>© 2025 Dr. Detailer. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Our Services</h4>
          <ul className="space-y-1">
            <li>Exterior Detail</li>
            <li>Interior Detail</li>
            <li>Paint Correction</li>
            <li>Ceramic Coating</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
