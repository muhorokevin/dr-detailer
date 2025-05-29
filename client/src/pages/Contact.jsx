import React from "react";

export default function Contact() {
  return (
    <div className="bg-black text-white pt-28 px-6 font-sans max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

      <section className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-red-500 mb-2">Our Office</h2>
            <p className="text-gray-300">
              Based in Nairobi, we offer mobile car detailing services across Westlands, Lavington, Runda,
              Kilimani, Karen, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 mb-2">Contact Info</h2>
            <p className="text-gray-300">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+254728999073" className="text-red-500 hover:underline">+254 728 999 073</a>
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@drdetailer.co.ke" className="text-red-500 hover:underline">
                info@drdetailer.co.ke
              </a>
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Hours:</span> Mon–Sat: 8am – 6pm
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://wa.me/254728999073"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded text-white font-bold transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@drdetailer.co.ke"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded text-white font-bold transition"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="rounded overflow-hidden border border-gray-700 shadow-lg">
          <iframe
            title="Dr. Detailer Service Area"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.149479121287!2d36.80724464406703!3d-1.2920650927610817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173d00a2ab27%3A0x9f0b5a0e51e35c!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1685977680015!5m2!1sen!2ske"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
