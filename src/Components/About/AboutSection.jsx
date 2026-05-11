import React from 'react';

const AboutSection = () => {
  const skills = [
    { title: 'Search Engine Optimization', desc: 'Expertise in improving Google rankings and increasing organic traffic.', color: 'border-blue-400' },
    { title: 'Social Media Marketing', desc: 'Strategies for building brand awareness and engaging with audiences on social platforms.', color: 'border-yellow-400' },
    { title: 'Content Strategy', desc: 'Creating compelling content that resonates with the target audience and drives conversions.', color: 'border-yellow-400' },
    { title: 'Data Analytics', desc: 'Analyzing campaign performance and optimizing strategies for improved ROI.', color: 'border-blue-400' }
  ];

  return (
    <section id="about" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Professional Bio */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-2">My Story</h2>
              <h3 className="text-5xl font-black text-black leading-tight">
                Zahid Hussain — <br />
                <span className="text-gray-400">Driving Results in the</span> Digital World.
              </h3>
            </div>

            <p className="text-lg text-black leading-relaxed">
            I am a passionate Digital Marketing Specialist dedicated to helping businesses grow and succeed online. My focus is not just on driving traffic, but on reaching the right audience and converting them into loyal customers. I have developed result-driven strategies for multiple brands, helping them significantly increase their sales and strengthen their online presence by up to 10x.
            </p>

            {/* Core Competencies Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className={`p-6 bg-white rounded-2xl hover:transform hover:scale-105 border-l-4 duration-300 ${skill.color} shadow-sm hover:shadow-md transition-transform`}>
                  <h4 className="font-black text-black mb-2 uppercase text-sm tracking-tighter">{skill.title}</h4>
                  <p className="text-xs text-gray-500">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Decorative Stats & Image Area */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute top-10 right-10 w-full h-full bg-blue-600 rounded-3xl -z-10 opacity-10 rotate-3"></div>
            
            <div className="bg-black p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              {/* Abstract Design Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-full opacity-20"></div>

              <h4 className="text-2xl font-black mb-6">Why Work With Me?</h4>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-lg">Data-Driven Approach</span>
                    <span className="text-gray-400 text-sm">Every strategy is built on real data, analytics, and in-depth market research..</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-lg">Fast Execution</span>
                    <span className="text-gray-400 text-sm">My priority is to set up campaigns efficiently and continuously monitor their performance to achieve the best possible results.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="bg-white text-black p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-lg">24/7 Support</span>
                    <span className="text-gray-400 text-sm">Professional communication and availability to guide you at all times.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-10 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <p className="text-4xl font-black text-yellow-400">95%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Success Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-400">150+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Projects Done</p>
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