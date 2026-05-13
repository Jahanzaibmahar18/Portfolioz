import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Let’s build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT INFO */}
          <div
            data-aos="fade-right"
            className="space-y-8"
          >

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Mail className="text-white" size={22} />
              </div>

              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400">
                  zahidhussain077@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 p-3 rounded-xl text-black">
                <Phone className="text-black" size={22} />
              </div>

              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-400">
                  +92 316 7160569
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl">
                <MapPin className="text-black" size={22} />
              </div>

              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-400">
                  Rajanpur, Pakistan
                </p>
              </div>
            </div>

            {/* Extra Card */}
            <div
              data-aos="zoom-in"
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 leading-relaxed">
                I am available for freelance work, internships,
                and long-term projects. Feel free to contact me anytime.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="bg-white/5 p-10 rounded-3xl border border-white/10 space-y-6"
          >

            {/* Name */}
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none"
              required
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 font-bold hover:scale-105 transition"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;