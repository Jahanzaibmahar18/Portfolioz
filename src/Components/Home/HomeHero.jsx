import React from 'react';
import zahid from '../../assets/zahid.png';

const HomeHero = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-400">
      {/* Navbar yahan alag se call hoga (e.g., <Navbar />) */}

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12 pb-20">
        
        {/* Left Side: Image Container */}
        <div className="relative group order-2 md:order-1">
          {/* Decorative Background Elements */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 rounded-2xl z-0 group-hover:top-0 group-hover:left-0 transition-all duration-300"></div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-400 rounded-2xl z-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-300"></div>
          
          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-2xl bg-black h-[500px] w-full shadow-2xl">
            <img 
              src={zahid} 
              alt="Digital Marketing Expert" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-lg z-20 hidden lg:block border-l-4 border-blue-600">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Experience</p>
            <p className="text-3xl font-black text-black">10+ Years</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 order-1 md:order-2">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
            Results-Driven Strategy
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-black leading-none">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">MARKETING</span> <br />
            SPECIALIST
          </h1>

          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Helping brands dominate the digital landscape through data-backed strategies, 
            creative storytelling, and high-conversion ad campaigns.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-yellow-200">
              View My Projects
            </button>
            <button className="px-8 py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Let's Talk
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex items-center space-x-6 grayscale opacity-60">
            <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Expertise in:</span>
            <span className="font-black italic">SEO</span>
            <span className="font-black italic">PPC</span>
            <span className="font-black italic">SOCIAL</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeHero;