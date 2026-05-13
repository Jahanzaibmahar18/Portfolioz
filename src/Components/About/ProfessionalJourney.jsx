import React from "react";

const ProfessionalJourney = () => {

  const processSteps = [
    {
      number: "01",
      title: "Market Research",
      desc: "Understanding your industry, audience, and competitors to create a winning strategy.",
    },
    {
      number: "02",
      title: "Strategy Planning",
      desc: "Crafting a powerful digital roadmap focused on growth, branding, and conversions.",
    },
    {
      number: "03",
      title: "Campaign Launch",
      desc: "Executing high-performing campaigns across multiple digital platforms.",
    },
    {
      number: "04",
      title: "Optimization & Growth",
      desc: "Monitoring, testing, and improving campaigns for maximum ROI and long-term success.",
    },
  ];

  return (
    <section className="py-4 bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold mb-6">
              🚀 Workflow Process
            </div>

            {/* Heading */}
            <div data-aos="fade-right">
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Turning Ideas
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Into Results
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
              Every successful project starts with strategy, creativity,
              execution, and continuous optimization to achieve real growth.
            </p>

            {/* Image */}
            <div
              data-aos="fade-right"
              className="relative mt-12 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group"
            >

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Marketing Strategy"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

              <div className="absolute bottom-10 left-10">
                <h3 className="text-4xl font-extrabold">
                  Ready To Scale?
                </h3>

                <p className="text-gray-400 mt-2">
                  Let’s grow your business with strategy.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {processSteps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-left"
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition duration-500"></div>

                <div className="relative z-10 flex gap-6">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-xl group-hover:scale-110 transition">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Background Number */}
                <span className="absolute right-6 top-4 text-8xl font-extrabold text-white/5 group-hover:text-blue-500/10 transition">
                  {step.number}
                </span>
              </div>
            ))}

            {/* CTA */}
            <div className="relative mt-12 p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">

              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 blur-[140px]"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">

                <div>
                  <h3 className="text-3xl font-extrabold">
                    Let’s Build Your Growth Strategy
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Start your transformation today.
                  </p>
                </div>

                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold hover:scale-105 transition shadow-2xl">
                  Get Started
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