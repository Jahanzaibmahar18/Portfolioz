import React from 'react';

const ProfessionalJourney = () => {
  const processSteps = [
    {
      number: "01",
      title: "Market Discovery",
      desc: "Deep research into your industry, competitors, and target audience behavior."
    },
    {
      number: "02",
      title: "Strategy Crafting",
      desc: "Creating a bespoke digital roadmap focused on high ROI and brand scaling."
    },
    {
      number: "03",
      title: "Execution & Launch",
      desc: "Deploying multi-channel campaigns with precision and creative excellence."
    },
    {
      number: "04",
      title: "Optimization",
      desc: "Continuous A/B testing and data analysis to maximize performance."
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Branding Side */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
                <span className="w-12 h-0.5 bg-blue-600 mr-4"></span> Execution Flow
              </h2>
              <h3 className="text-6xl font-black text-black leading-none mb-8">
                How We Turn <br /> 
                <span className="text-blue-600 italic underline decoration-yellow-400">Goals</span> Into <br /> 
                Reality.
              </h3>
              
              <div className="relative group rounded-4xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
                <img  
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  alt="Marketing Strategy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-yellow-400 font-black text-4xl italic">Ready to Scale?</p>
                  <p className="text-white font-medium opacity-80 uppercase tracking-widest text-xs mt-2">10 Years of Industry Expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="lg:col-span-7 space-y-4">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group p-10 bg-white border border-gray-100 rounded-3xl flex items-start gap-8 transition-all duration-500 hover:shadow-xl hover:border-blue-100 relative"
              >
                {/* Number Background */}
                <span className="text-8xl font-black text-gray-50 absolute right-10 top-5 group-hover:text-blue-50 transition-colors pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 transition-colors shadow-lg">
                    {step.number}
                  </div>
                  <h4 className="text-2xl font-black text-black mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-lg transition-colors group-hover:text-gray-700">
                    {step.desc}
                  </p>
                </div>

                {/* Decorative Line on Hover */}
                <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-l-3xl"></div>
              </div>
            ))}

            {/* Final CTA Card */}
            <div className="p-1 bg-linear-to-r from-blue-600 via-yellow-400 to-blue-600 rounded-3xl mt-12 animate-gradient-x">
              <div className="bg-black p-8 rounded-[1.4rem] flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-white text-xl font-bold italic">Strategy is the difference between guessing and growing.</h5>
                  <p className="text-gray-400 text-sm mt-1">Let's build a custom plan for your business.</p>
                </div>
                <button className="whitespace-nowrap bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-xl">
                  Get My Plan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;