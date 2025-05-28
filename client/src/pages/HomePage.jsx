import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-[#0B0E1A] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-5xl font-extrabold text-white">
            Elevate Your Ride with Professional Care
          </h1>
          <p className="text-lg text-gray-300">
            Experience the ultimate in automotive pampering with our comprehensive mobile car detailing service.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold"
          >
            Book Now
          </motion.button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          src="/drdetailer01.png"
          alt="Luxury car"
          className="w-full max-w-xl rounded-lg shadow-xl mt-10 md:mt-0"
        />
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="bg-[#1B1F30] p-4 rounded">Our Services</li>
            <li className="bg-[#1B1F30] p-4 rounded">About Us</li>
            <li className="bg-[#1B1F30] p-4 rounded">Contact</li>
            <li className="bg-[#1B1F30] p-4 rounded">FAQ</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white text-black p-6 rounded shadow"
        >
          <h3 className="text-2xl font-bold mb-4">Revitalize Your Investment</h3>
          <p>
            Our expert technicians meticulously clean, polish, and protect every inch of your vehicle,
            restoring its showroom shine and preserving its value.
          </p>
        </motion.div>
      </section>

      {/* Unlock Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Unlock the Full Potential</h2>
          <p className="mt-4 text-gray-300">
            Discover the unmatched benefits of our premium mobile car detailing services. From a flawless exterior
            to a refreshed interior, our team of experts utilizes the finest products and techniques to elevate your
            ride to new heights.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src="/drdetailer02.png"
          alt="Detailing service"
          className="w-full max-w-md rounded shadow-xl"
        />
      </section>

      {/* Tailored Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-[#10131F] py-20"
      >
        <h2 className="text-3xl font-bold">Tailored to Your Needs</h2>
        <p className="mt-4 text-gray-400">
          Our skilled technicians meticulously attend to every detail, leaving no surface untouched.
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0B0E1A] text-gray-400 py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img src="/logo.svg" alt="Logo" className="mb-4" />
          <p>© 2025 Dr.Detailer. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Our Services</h4>
          <ul className="space-y-1">
            <li>Mobile Car Detailing</li>
            <li>Paint Protection</li>
            <li>Ceramic Coating</li>
            <li>Interior Detailing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Connect With Us</h4>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
