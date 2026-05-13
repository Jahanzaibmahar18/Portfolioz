import React, { useEffect } from "react";
import zahid from "../../assets/zahid.png";

import AOS from "aos";
import "aos/dist/aos.css";

const HomeHero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="h-full bg-black text-white overflow-hidden flex items-center relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="text-center lg:text-left"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-blue-400 text-sm font-semibold mb-8">
            🚀 Digital Marketing Expert
          </div>

          {/* Heading */}
          <h5 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Scaling Brands with
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Strategy & Creativity
            </span>
          </h5>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
            Helping businesses grow online through social media management,
            content marketing, video editing, and AI-powered digital strategies
            designed to increase engagement, visibility, and brand growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

            <a href="#projects">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-2xl hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                Contact Me
              </button>
            </a>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-12">

            {[
              "Social Media Manager",
              "Content Marketer",
              "Video Editor",
              "AI Content Creator",
            ].map((item, index) => (
              <span
                key={index}
                data-aos="flip-up"
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-gray-300 hover:text-white hover:border-blue-500 hover:scale-105 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-blue-600/20 blur-[120px] rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-5 shadow-2xl">

            <img
              src={zahid}
              alt="Zahid Hussain"
              className="w-[350px] sm:w-[450px] rounded-[30px] object-cover"
            />

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-6 hover:shadow-blue-500/30 hover:transform hover:scale-105 duration-300 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl">

              <h3 className="text-3xl font-extrabold text-blue-600">
                3+
              </h3>

              <p className="font-medium text-gray-700">
                Years Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;