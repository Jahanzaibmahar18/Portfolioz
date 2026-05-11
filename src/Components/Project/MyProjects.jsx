import React, { useState } from 'react';

// === IMPORT SECTION ===
// Yahan aap apni local files import kar sakte hain:
// import ProjectVid1 from '../../assets/videos/vid1.mp4';
// import ProjectImg1 from '../../assets/images/img1.jpg';

const MyProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // --- Local Data Arrays (Aap yahan apne imported variables dalein) ---
  const videoData = [
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", tag: "Consulting", color: "bg-blue-600", title: "The Givers Consultancy - Growth Strategy" },
    { url: "https://www.w3schools.com/html/movie.mp4", tag: "Law Services", color: "bg-cyan-600", title: "AL KHALDI - Firm & Legal Consultations" },
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", tag: "Clothing Brand", color: "bg-purple-600", title: "Laundry Garment Care - E-commerce" },
  ];

  const imageData = [
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200", tag: "Marketing", color: "bg-teal-600", title: "Social Media Domination Campaign" },
    { url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200", tag: "Development", color: "bg-indigo-600", title: "Premium E-commerce UI/UX Design" },
    { url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200", tag: "Analytics", color: "bg-orange-600", title: "Data-Driven Business Scaling" },
  ];

  // === Modal / Lightbox Component ===
  const Lightbox = () => {
    if (!selectedItem) return null;

    return (
      <div 
        className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-xl z-[999] flex items-center justify-center p-4 md:p-10 transition-all duration-500"
        onClick={() => setSelectedItem(null)}
      >
        {/* Modal Container */}
        <div 
          className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all scale-100"
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Close Button */}
          <button 
            className="absolute top-5 right-5 z-[1001] bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>
          
          <div className="w-full h-full flex items-center justify-center bg-black">
            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.url} 
                controls 
                autoPlay 
                className="w-full max-h-[85vh] object-contain"
              />
            ) : (
              <img 
                src={selectedItem.url} 
                alt="Project Detail" 
                className="w-full max-h-[85vh] object-contain shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ children, onClick, tagText, tagColor, title }) => (
    <div 
      className="bg-[#111111]/90 border border-white/5 rounded-[2.5rem] p-4 flex flex-col justify-between items-start transition-all duration-500 hover:border-cyan-500/40 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 shadow-2xl">
        {children}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        <div className={`absolute top-5 left-5 ${tagColor} text-[10px] uppercase tracking-[0.2em] font-black px-5 py-2.5 rounded-full shadow-xl text-white`}>
          {tagText}
        </div>
      </div>
      
      <div className="w-full px-2 pb-2">
        <h3 className="text-white text-xl md:text-2xl font-black leading-tight group-hover:text-cyan-400 transition-colors mb-5 italic uppercase tracking-tighter">
          {title}
        </h3>
        <div className="inline-flex items-center gap-3 text-cyan-500 text-xs font-black uppercase tracking-[0.3em] group-hover:text-white transition-all">
          View Project 
          <span className="text-xl transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-1">
            ↗
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-[#050505] min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-24">
          <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase leading-none">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Scaling Brands through Digital Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Video Projects */}
          {videoData.map((v, i) => (
            <ProjectCard 
              key={`vid-${i}`} 
              onClick={() => setSelectedItem({ type: 'video', url: v.url })} 
              tagText={v.tag} 
              tagColor={v.color} 
              title={v.title}
            >
              <video 
                src={v.url} 
                muted 
                loop 
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
              />
            </ProjectCard>
          ))}

          {/* Image Projects */}
          {imageData.map((img, i) => (
            <ProjectCard 
              key={`img-${i}`} 
              onClick={() => setSelectedItem({ type: 'image', url: img.url })} 
              tagText={img.tag} 
              tagColor={img.color} 
              title={img.title}
            >
              <img 
                src={img.url} 
                alt="project" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
              />
            </ProjectCard>
          ))}
        </div>
      </div>

      {/* Fullscreen Blur Lightbox */}
      <Lightbox />
    </section>
  );
};

export default MyProjects;