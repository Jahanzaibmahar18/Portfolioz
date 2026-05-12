import React from 'react';
import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-full  w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden px- md:px-10 lg:px-20 pt-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>

      {/* max-w-none ka istemal kiya hai taake grid poori width cover kare */}
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left w-full">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold tracking-wide uppercase animate-bounce">
            <Sparkles size={16} /> 2026 Digital Strategy Expert
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            DOMINATE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300">
              DIGITAL FRONTIER
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Helping ambitious brands scale through data-driven marketing, high-performance web development, and creative excellence. 
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 group">
              Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-gray-700 hover:border-gray-500 text-white font-black rounded-xl transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-10 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-900 rounded-xl text-blue-500"><Trophy size={24} /></div>
              <div>
                <p className="text-white font-bold text-2xl leading-none">150+</p>
                <p className="text-gray-500 text-xs uppercase font-black tracking-widest mt-2">Success Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-900 rounded-xl text-blue-500"><Users size={24} /></div>
              <div>
                <p className="text-white font-bold text-2xl leading-none">98%</p>
                <p className="text-gray-500 text-xs uppercase font-black tracking-widest mt-2">Client Retention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <div className="relative group lg:block hidden w-full mb-10">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Card container ko w-full kiya hai */}
          <div className="relative bg-[#151515] border border-white/5 rounded-[3rem] p-6 shadow-2xl overflow-hidden w-full max-w-xl ml-auto">
            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-12 aspect-square flex flex-col justify-center items-center text-center">
               <div className="w-40 h-40 bg-blue-600/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
                  <div className="w-20 h-20 bg-blue-500 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.6)]"></div>
               </div>
               <h3 className="text-3xl font-black text-white italic mb-3 uppercase tracking-tighter">Growth Metrics</h3>
               <p className="text-gray-500 text-base max-w-[250px]">Real-time analytics integration for business scaling.</p>
               
               <div className="mt-10 space-y-4 w-full px-4">
                  <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-600 animate-[pulse_2s_infinite]"></div>
                  </div>
                  <div className="h-2.5 w-[70%] bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-purple-600 animate-[pulse_3s_infinite]"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl transform hover:-rotate-3 transition-transform duration-500 hidden xl:block z-20">
            <p className="text-black font-black text-3xl tracking-tighter italic uppercase leading-none">High ROI</p>
            <p className="text-gray-500 text-sm font-bold mt-2">Guaranteed Results</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;