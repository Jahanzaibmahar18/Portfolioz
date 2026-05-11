import React from "react";

const ServiceGrid = () => {
  const services = [
    {
      title: "Growth Marketing",
      category: "Strategy",
      desc: "Data-driven tactics to scale your customer base rapidly.",
      icon: "📈",
    },
    {
      title: "Social Dominance",
      category: "Management",
      desc: "Complete social media ecosystem management and content.",
      icon: "📱",
    },
    {
      title: "Search Engine Ads",
      category: "PPC",
      desc: "High-intent keyword targeting to capture ready buyers.",
      icon: "🎯",
    },
    {
      title: "Brand Storytelling",
      category: "Creative",
      desc: "Build a powerful identity that connects emotionally.",
      icon: "✨",
    },
    {
      title: "Web Optimization",
      category: "Conversion",
      desc: "Landing pages optimized for maximum conversion rate.",
      icon: "💻",
    },
    {
      title: "Email Automation",
      category: "Retention",
      desc: "Smart automated funnels that increase customer lifetime value.",
      icon: "✉️",
    },
  ];

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row justify-between gap-10">
          
          <div>
            <p className="text-blue-500 uppercase tracking-[0.3em] text-sm font-bold">
              Core Services
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mt-4">
              Precision <br />
              <span className="text-yellow-400">Marketing</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-md border-l border-gray-800 pl-6">
            We don’t just run ads — we build scalable revenue systems for modern brands.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-800">
          
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-10 border border-gray-800 hover:bg-white/5 transition-all duration-500"
            >

              {/* INDEX */}
              <span className="absolute top-6 right-6 text-gray-700 font-black group-hover:text-blue-500 transition">
                0{i + 1}
              </span>

              {/* ICON */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* CATEGORY */}
              <p className="text-blue-500 text-xs uppercase tracking-widest font-bold">
                {service.category}
              </p>

              {/* TITLE */}
              <h3 className="text-2xl font-black mt-2 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                {service.desc}
              </p>

              {/* CTA */}
              <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-yellow-400 transition">
                Learn More
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>

              {/* ACCENT LINE */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center text-gray-400">
          Need a custom solution?{" "}
          <span className="text-yellow-400 font-bold cursor-pointer border-b border-yellow-400">
            Contact us
          </span>
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;