import React from "react";
import {
  Zap,
  BarChart3,
  MessageCircle,
  Search,
  TrendingUp,
  Target,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      title: "SEO Optimization",
      desc: "Boosting search rankings and increasing organic traffic through modern SEO strategies.",
      icon: <Search size={22} />,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Social Media Marketing",
      desc: "Building strong brand presence and audience engagement across platforms.",
      icon: <MessageCircle size={22} />,
      color: "from-cyan-500 to-blue-700",
    },
    {
      title: "Content Strategy",
      desc: "Creating compelling content that converts visitors into loyal customers.",
      icon: <Target size={22} />,
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Analytics & Growth",
      desc: "Tracking performance and improving ROI with smart data-driven decisions.",
      icon: <BarChart3 size={22} />,
      color: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-4 bg-black text-white relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold mb-6">
              About Me
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Passionate About
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Digital Growth
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              I help businesses grow online through powerful marketing strategies,
              SEO optimization, branding, and performance-driven campaigns.
            </p>

            {/* Skill Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-500"
                >
                  
                  {/* Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition duration-500 rounded-[28px]`}></div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${item.color} shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[140px] rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 lg:p-14 shadow-2xl">
              
              {/* Title */}
              <h3 className="text-4xl font-extrabold mb-10">
                Why Choose Me?
              </h3>

              {/* FEATURES */}
              <div className="space-y-8">
                
                {/* Feature */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black flex items-center justify-center">
                    <Zap size={20} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Data-Driven Strategy
                    </h4>
                    <p className="text-gray-400">
                      Every decision is based on real analytics and insights.
                    </p>
                  </div>
                </div>

                {/* Feature */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Fast Execution
                    </h4>
                    <p className="text-gray-400">
                      Quick and efficient campaign delivery for fast results.
                    </p>
                  </div>
                </div>

                {/* Feature */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Dedicated Support
                    </h4>
                    <p className="text-gray-400">
                      24/7 professional communication and support.
                    </p>
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-8 mt-14 pt-10 border-t border-white/10">
                
                <div>
                  <h3 className="text-5xl font-extrabold text-blue-400">
                    95%
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                    Success Rate
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-extrabold text-cyan-400">
                    150+
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                    Projects Done
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;