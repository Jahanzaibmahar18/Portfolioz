import React from 'react';

const MarketingSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Social Media Strategy",
      description: "We craft tailored social media campaigns that amplify brand engagement and drive high-intent sales conversions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      accent: "bg-blue-600"
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      description: "Dominating search rankings using advanced SEO techniques to ensure your brand stays ahead of the competition.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accent: "bg-yellow-400"
    },
    {
      id: 3,
      title: "Performance Marketing",
      description: "Maximizing ROI through data-backed PPC and paid social campaigns optimized for scale and efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      accent: "bg-black"
    },
    {
      id: 4,
      title: "Brand Identity Systems",
      description: "Developing comprehensive visual identities and storytelling strategies that resonate with your target audience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      accent: "bg-blue-400"
    }
  ];

  return (
    <div className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl group">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 flex items-center">
              <span className="w-12 h-0.5 bg-blue-600 mr-4 transition-all group-hover:w-20"></span> 
              Our Expertise
            </h2>
            <h3 className="text-5xl gap-6 md:text-6xl  font-black text-black leading-[1.2]  ">
              Strategic Solutions <br />
              <span className="text-blue-600">to Scale Your Business.</span>
            </h3>
          </div>
          <div className="pb-2">
            <p className="text-gray-400 font-medium max-w-xs border-l-4 mb-10 mr-15 border-yellow-400 pl-6 leading-relaxed italic hover:text-blue-600 transition-colors duration-300 ">
              "Digital marketing is no longer about the stuff you make, but the stories you tell."
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => (
            <div 
              key={item.id} 
              className="group relative p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Dynamic Background Hover Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 ${item.accent}`}></div>
              
              {/* Floating Icon Container */}
              <div className={`w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-yellow-400 group-hover:text-black text-gray-700`}>
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-black text-black mb-4 transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h4>
              
              <p className="text-gray-500 leading-relaxed mb-10 transition-colors duration-300 group-hover:text-gray-800">
                {item.description}
              </p>
              
              {/* Animated Button Link */}
              <div className="flex items-center text-sm font-black uppercase tracking-widest text-black group-hover:text-yellow-400 transition-all cursor-pointer">
                <span className="relative overflow-hidden inline-block">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Explore More</span>
                  <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full">Explore More</span>
                </span>
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Metrics Bar */}
        <div className="mt-10 p-12 bg-black rounded-[3rem] grid grid-cols-1 md:grid-cols-3 gap-12 relative shadow-2xl shadow-blue-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
          
          <div className="text-center relative z-10 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0">
            <p className="text-yellow-400 text-6xl font-black tracking-tighter mb-2 italic">500%</p>
            <p className="text-gray-400 text-xs uppercase font-black tracking-[0.3em]">Revenue Growth</p>
          </div>
          
          <div className="text-center relative z-10 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0">
            <p className="text-blue-500 text-6xl font-black tracking-tighter mb-2 italic">10M+</p>
            <p className="text-gray-400 text-xs uppercase font-black tracking-[0.3em]">Impressions Delivered</p>
          </div>
          
          <div className="text-center relative z-10">
            <p className="text-white text-6xl font-black tracking-tighter mb-2 italic">100%</p>
            <p className="text-gray-400 text-xs uppercase font-black tracking-[0.3em]">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarketingSolutions;