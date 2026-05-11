import React from "react";

import {
  BarChart3,
  Search,
  Megaphone,
  Palette,
  ArrowRight,
} from "lucide-react";

const MarketingSolutions = () => {
  const services = [
    {
      id: 1,
      title: "Social Media Strategy",
      desc: "Creating powerful campaigns that increase engagement, reach, and customer conversions.",
      icon: <Megaphone size={34} />,
      color: "from-blue-600 to-cyan-500",
    },

    {
      id: 2,
      title: "SEO Optimization",
      desc: "Helping your business rank higher on search engines with advanced SEO strategies.",
      icon: <Search size={34} />,
      color: "from-cyan-500 to-blue-700",
    },

    {
      id: 3,
      title: "Performance Marketing",
      desc: "Scaling businesses through high-performing paid campaigns and ROI-focused marketing.",
      icon: <BarChart3 size={34} />,
      color: "from-indigo-500 to-blue-600",
    },

    {
      id: 4,
      title: "Brand Identity",
      desc: "Building memorable brand experiences with modern visual and storytelling systems.",
      icon: <Palette size={34} />,
      color: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section className="bg-black text-white py-24 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-blue-400 text-sm font-semibold mb-6">
            Our Expertise
          </span>

          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Strategic Marketing
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Helping brands grow online with modern digital marketing,
            branding strategies, and performance-driven campaigns.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 overflow-hidden hover:-translate-y-3 hover:border-blue-500/30 transition-all duration-500 shadow-xl"
            >
              
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition duration-500`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Bottom Border Animation */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* STATS SECTION */}
        <div className="mt-24 relative rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* STAT */}
            <div>
              <h3 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                500%
              </h3>

              <p className="mt-3 text-gray-400 uppercase tracking-[0.2em] text-sm font-semibold">
                Revenue Growth
              </p>
            </div>

            {/* STAT */}
            <div>
              <h3 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                10M+
              </h3>

              <p className="mt-3 text-gray-400 uppercase tracking-[0.2em] text-sm font-semibold">
                Impressions Delivered
              </p>
            </div>

            {/* STAT */}
            <div>
              <h3 className="text-6xl font-extrabold text-white">
                100%
              </h3>

              <p className="mt-3 text-gray-400 uppercase tracking-[0.2em] text-sm font-semibold">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutions;