import React from 'react';
import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold tracking-wide uppercase animate-bounce">
            <Sparkles size={16} /> 2026 Digital Strategy Expert
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            DOMINATE THE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300">
              DIGITAL FRONTIER
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Helping ambitious brands scale through data-driven marketing, high-performance web development, and creative excellence. 
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 group">
              Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-gray-700 hover:border-gray-500 text-white font-black rounded-xl transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-8 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gray-900 rounded-lg text-blue-500"><Trophy size={20} /></div>
              <div>
                <p className="text-white font-bold text-xl leading-none">150+</p>
                <p className="text-gray-500 text-xs uppercase font-black tracking-widest mt-1">Success Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gray-900 rounded-lg text-blue-500"><Users size={20} /></div>
              <div>
                <p className="text-white font-bold text-xl leading-none">98%</p>
                <p className="text-gray-500 text-xs uppercase font-black tracking-widest mt-1">Client Retention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <div className="relative group lg:block hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative bg-[#151515] border border-white/5 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
            {/* Fake UI Element for Professional Look */}
            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 aspect-square flex flex-col justify-center items-center text-center">
               <div className="w-32 h-32 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <div className="w-16 h-16 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
               </div>
               <h3 className="text-2xl font-black text-white italic mb-2 uppercase tracking-tighter">Growth Metrics</h3>
               <p className="text-gray-500 text-sm max-w-[200px]">Real-time analytics integration for business scaling.</p>
               
               {/* Decorative Lines */}
               <div className="mt-8 space-y-3 w-full">
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-blue-600 animate-slide"></div>
                  </div>
                  <div className="h-2 w-[60%] bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-purple-600 animate-slide"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl transform hover:-rotate-3 transition-transform duration-500 hidden xl:block">
            <p className="text-black font-black text-2xl tracking-tighter italic uppercase leading-none">High ROI</p>
            <p className="text-gray-500 text-xs font-bold mt-1">Guaranteed Results</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;