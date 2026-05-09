import React from 'react';

const ServiceGrid = () => {
  const services = [
    {
      title: "Growth Marketing",
      category: "Strategy",
      desc: "Data-driven tactics to scale your customer base rapidly.",
      icon: "📈",
      border: "hover:border-blue-600"
    },
    {
      title: "Social Dominance",
      category: "Management",
      desc: "Complete social media ecosystem management and content.",
      icon: "📱",
      border: "hover:border-yellow-400"
    },
    {
      title: "Search Engine Ads",
      category: "PPC",
      desc: "High-intent keyword targeting to grab ready-to-buy leads.",
      icon: "🎯",
      border: "hover:border-black"
    },
    {
      title: "Brand Storytelling",
      category: "Creative",
      desc: "Unique visual identity and brand voice development.",
      icon: "✨",
      border: "hover:border-blue-400"
    },
    {
      title: "Web Optimization",
      category: "Conversion",
      desc: "High-performance landing pages that convert traffic into sales.",
      icon: "💻",
      border: "hover:border-gray-800"
    },
    {
      title: "Email Automation",
      category: "Retention",
      desc: "Personalized email flows to keep your customers coming back.",
      icon: "✉️",
      border: "hover:border-blue-800"
    }
  ];

  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4">Core Services</p>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-tight tracking-tighter">
              Precision <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Marketing.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-[280px] font-medium border-l-2 border-gray-100 pl-6">
            We don't just run ads; we build revenue engines for ambitious brands.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative p-12 border-r border-b border-gray-100 transition-all duration-500 hover:bg-black overflow-hidden`}
            >
              {/* Floating Number */}
              <span className="absolute top-8 right-8 text-sm font-black text-gray-200 group-hover:text-gray-800 transition-colors">
                0{index + 1}
              </span>

              {/* Icon & Category */}
              <div className="relative z-10">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125 origin-left">
                  {service.icon}
                </div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
                  {service.category}
                </p>
                <h4 className="text-3xl font-black text-black group-hover:text-white transition-colors mb-6 tracking-tight">
                  {service.title}
                </h4>
                
                {/* Description - Slides up on hover */}
                <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
                  {service.desc}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center text-black group-hover:text-yellow-400 font-black uppercase text-[10px] tracking-[0.2em] transition-colors">
                  Get Started 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover Decorative Line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-medium">
            Need a custom solution? 
            <a href="#" className="text-black font-black border-b-2 border-yellow-400 ml-2 hover:text-blue-600 transition-colors">
              Request a Consultation
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;