import React, { useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";

const MyProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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

  // ================= LIGHTBOX =================
  const Lightbox = () => {
    if (!selectedItem) return null;

    return (
      <div
        onClick={() => setSelectedItem(null)}
        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-5"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl rounded-[40px] overflow-hidden border border-white/10 bg-[#0b1120] shadow-2xl animate-[fadeIn_.4s_ease]"
        >
          {/* Close */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-xl transition-all"
          >
            <X size={22} />
          </button>

          {/* Content */}
          <div className="w-full h-full bg-black flex items-center justify-center">
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="w-full max-h-[90vh] object-contain"
              />
            ) : (
              <img
                src={selectedItem.url}
                alt="project"
                className="w-full max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

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