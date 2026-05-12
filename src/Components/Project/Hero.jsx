import React from "react";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
  BarChart3,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center px-6 md:px-12 lg:px-20 pt-24">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide">
            <Sparkles size={16} />
            2026 Digital Strategy Agency
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white">
              BUILD YOUR
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <br />
              EMPIRE
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              We help ambitious businesses grow with cutting-edge web
              development, SEO, branding, and high-converting digital
              experiences.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <button className="group px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-bold text-white flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(37,99,235,0.35)] hover:scale-105">
              Start Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md text-white font-bold transition-all duration-300 hover:bg-white/10">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 pt-8">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:translate-y-[-5px] transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                <Trophy size={28} />
              </div>

              <h3 className="text-3xl font-black text-white">150+</h3>

              <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
                Successful Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:translate-y-[-5px] transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                <Users size={28} />
              </div>

              <h3 className="text-3xl font-black text-white">98%</h3>

              <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
                Client Satisfaction
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden lg:flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          {/* Main Card */}
          <div className="relative w-full max-w-xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

            <div className="rounded-[30px] bg-[#0b1120] p-10 flex flex-col items-center text-center space-y-8">

              {/* Circle */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-40 rounded-full"></div>

                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.5)]">
                  <BarChart3 size={60} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-4xl font-black text-white tracking-tight">
                  Growth Analytics
                </h2>

                <p className="text-gray-400 mt-4 max-w-sm leading-relaxed">
                  Advanced real-time performance tracking designed for scaling
                  modern brands and businesses globally.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="w-full space-y-5">

                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Conversion Rate</span>
                    <span>85%</span>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Audience Growth</span>
                    <span>70%</span>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-white text-black rounded-3xl p-6 shadow-2xl rotate-[-5deg] hover:rotate-0 transition duration-500">

            <p className="text-4xl font-black leading-none">
              +320%
            </p>

            <p className="text-sm font-semibold text-gray-600 mt-2 uppercase tracking-wider">
              Business Growth
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;