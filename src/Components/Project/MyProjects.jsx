import React, { useState } from 'react';

import mar1 from '../../assets/mar1.png';
import mar2 from '../../assets/mar2.png';
import mar3 from '../../assets/mar3.png';
import { ExternalLink, Play, X } from "lucide-react";

const MyProjects = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // --- Instagram Case Study Data ---
    const caseStudyData = [
        {
            type: 'image',
            url: mar1,
            tag: "Growth",
            color: "bg-green-600",
            title: "Account Growth Transformation",
            tagline: "From Low Visibility to Consistent Audience Growth",
            desc: "Successfully transformed the Instagram account by improving profile optimization, content consistency, and audience engagement strategy. Achieved significant growth in followers, reach, and overall account activity.",
            stats: ["Followers Growth", "Improved Reach", "Better Engagement", "Stronger Presence"],
            tools: "Instagram Optimization • Audience Targeting • Content Strategy",
            buttonText: "View Growth Results"
        },
        {
            type: 'image',
            url: mar2,
            tag: "Analytics",
            color: "bg-blue-600",
            title: "Performance Analytics & Insights",
            tagline: "Tracking Growth Through Real-Time Performance Metrics",
            desc: "Analyzed Instagram Insights and performance metrics to monitor audience behavior, engagement patterns, content reach, and interaction growth using data-driven reporting.",
            stats: ["20.3K Views", "7.1K Reach", "19% Eng. Growth", "545+ Interactions"],
            tools: "Instagram Insights • Analytics Tracking • KPI Monitoring",
            buttonText: "Explore Analytics"
        },
        {
            type: 'image',
            url: mar3,
            tag: "Optimization",
            color: "bg-purple-600",
            title: "Profile Branding & Optimization",
            tagline: "Creating a Professional and Scalable Digital Identity",
            desc: "Enhanced the overall Instagram profile structure by improving branding consistency, visual presentation, and bio optimization to create a professional online presence.",
            stats: ["Optimized Profile", "Brand Consistency", "Audience Trust", "Professional Layout"],
            tools: "Brand Strategy • Visual Optimization • Content Planning",
            buttonText: "View Optimization"
        }
    ];

    const Lightbox = () => {
        if (!selectedItem) return null;
        return (
            <div
                className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-2xl z-[999] flex items-center justify-center p-4 md:p-10"
                onClick={() => setSelectedItem(null)}
            >
                <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-5 right-5 z-[1001] bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all" onClick={() => setSelectedItem(null)}>✕</button>
                    <img src={selectedItem.url} alt="Project Detail" className="w-full max-h-[85vh] object-contain" />
                    <div className="p-6 bg-black/60 backdrop-blur-md">
                        <h3 className="text-white text-xl font-bold">{selectedItem.title}</h3>
                        <p className="text-gray-400 text-sm">{selectedItem.tagline}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="bg-[#0a0a0a] h-full py-24 px-6 relative">
            <div className="max-w-7xl mx-auto z-10 relative">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase leading-none">
                        Instagram <span className="text-cyan-500">Growth</span> Case Study
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
                        Transforming a Low-Engagement Profile into a High-Performance Brand Presence through strategic content planning and data-driven optimization.
                    </p>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {caseStudyData.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#111111]/90 border border-white/5 rounded-[2.5rem] p-5 flex flex-col group cursor-pointer hover:border-cyan-500/40 transition-all duration-500"
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Image Preview */}
                            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className={`absolute top-4 left-4 ${item.color} text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-white shadow-lg`}>
                                    {item.tag}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="px-2 flex-grow">
                                <h3 className="text-white text-2xl font-black italic uppercase mb-1 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-cyan-500/80 text-[11px] font-bold uppercase mb-3 tracking-wider">
                                    {item.tagline}
                                </p>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {item.desc}
                                </p>

                                {/* Bottom Stats */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.stats.map((stat, idx) => (
                                        <span key={idx} className="bg-white/5 border border-white/10 text-gray-400 text-[9px] font-bold uppercase tracking-tighter px-3 py-1.5 rounded-lg group-hover:text-white transition-colors">
                                            {stat}
                                        </span>
                                    ))}
                                </div>

                                {/* Tools Mentioned */}
                                <p className="text-[10px] text-gray-600 mb-6 italic">
                                    {item.tools}
                                </p>

                                <div className="mt-auto text-cyan-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-white">
                                    {item.buttonText} <span className="text-lg transform group-hover:translate-x-2 transition-transform">↗</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Lightbox />
        </section>
    );
  // ================= PROJECT DATA =================
  const projects = [
    {
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      tag: "Consulting",
      color: "from-cyan-500 to-blue-600",
      title: "The Givers Consultancy",
      description: "Premium growth strategy and consulting platform.",
    },

    {
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      tag: "Legal",
      color: "from-purple-500 to-pink-600",
      title: "AL KHALDI Law Firm",
      description: "Professional legal consultation experience.",
    },

    {
      type: "image",
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
      tag: "Marketing",
      color: "from-orange-500 to-red-500",
      title: "Social Media Campaign",
      description: "Digital domination through modern branding.",
    },

    {
      type: "image",
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200",
      tag: "UI/UX",
      color: "from-indigo-500 to-cyan-500",
      title: "E-commerce Dashboard",
      description: "Luxury shopping experience with clean UI.",
    },

    {
      type: "image",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
      tag: "Analytics",
      color: "from-green-500 to-emerald-600",
      title: "Business Analytics",
      description: "Real-time performance tracking solutions.",
    },

    {
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      tag: "Branding",
      color: "from-blue-500 to-cyan-500",
      title: "Luxury Fashion Brand",
      description: "Modern e-commerce branding experience.",
    },
  ];


  // ================= MAIN =================
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-bold mb-5">
            Portfolio Showcase
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Selected
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            A collection of premium digital experiences crafted for
            ambitious brands and businesses worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(project)}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-700"
            >
              {/* Media */}
              <div className="relative aspect-[4/3] overflow-hidden">

                {project.type === "video" ? (
                  <video
                    src={project.url}
                    muted
                    loop
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                ) : (
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Tag */}
                <div
                  className={`absolute top-5 left-5 bg-gradient-to-r ${project.color} px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.25em] font-bold shadow-xl`}
                >
                  {project.tag}
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    {project.type === "video" ? (
                      <Play className="text-white ml-1" size={32} />
                    ) : (
                      <ExternalLink className="text-white" size={30} />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-4">

                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold pt-2">
                  View Project
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Lightbox />
    </section>
  );
};

export default MyProjects;