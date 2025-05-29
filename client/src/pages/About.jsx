import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-black text-white font-sans pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">About Dr. Detailer</h1>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-500">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            DR. Detailer is the vision of a young entrepreneur passionate about automotive care.
            Founded in Nairobi by a 25-year-old recent graduate, our mission is to elevate vehicle
            care by combining mobility, professionalism, and premium service. Born out of a need
            for convenience, quality, and eco-conscious solutions, Dr. Detailer was created to
            redefine the car care experience in Kenya.
          </p>
        </div>
        <img src="/drdetailer02.png" alt="Founder Setup" className="rounded shadow-lg border border-gray-800 w-full object-cover" />
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-[#111] p-6 rounded shadow border border-gray-700">
          <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
          <p className="text-gray-400">
            To deliver high-end mobile detailing services with unmatched convenience, eco-friendliness,
            and personalized care — right at our clients’ doorsteps.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded shadow border border-gray-700">
          <h3 className="text-xl font-semibold mb-2 text-white">Our Vision</h3>
          <p className="text-gray-400">
            To become the most trusted mobile car detailing brand in Nairobi — one car, one
            neighborhood, and one extraordinary shine at a time.
          </p>
        </div>
      </section>

      {/* Mobile Setup */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img src="/drdetailer01.png" alt="Mobile Setup" className="rounded shadow-lg border border-gray-800 w-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-500">Our Mobile Advantage</h2>
          <ul className="text-gray-300 space-y-3 list-disc pl-6">
            <li>We come with our own water and power supply</li>
            <li>Certified and trained staff using professional tools</li>
            <li>Eco-friendly products and water-efficient techniques</li>
            <li>Fully insured operations for peace of mind</li>
            <li>Book from home, work, or anywhere in Nairobi</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#101010] rounded-lg mb-20">
        <h2 className="text-3xl font-bold mb-4">Ready for the premium treatment?</h2>
        <p className="text-gray-400 mb-6">Schedule your mobile detailing service today.</p>
        <Link
          to="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold text-white transition"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
