import React, { useState } from 'react';

// Pehle 3 cards ke liye videos ke links
const videoUrls = [
  "https://www.w3schools.com/html/mov_bbb.mp4", 
  "https://www.w3schools.com/html/movie.mp4",   
  "https://www.w3schools.com/html/mov_bbb.mp4", 
];

// Agle 3 cards ke liye full-size images ke links
const imageUrls = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200", 
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200", 
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200", 
];

const MyProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const Lightbox = () => {
    if (!selectedItem) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
        onClick={() => setSelectedItem(null)}
      >
        <div className="relative max-w-[90vw] max-h-[90vh] bg-[#111] p-1 rounded-2xl border border-white/10 shadow-2xl">
          <button 
            className="absolute -top-12 right-0 text-white text-4xl hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            &times;
          </button>
          
          {selectedItem.type === 'video' ? (
            <video src={selectedItem.url} controls autoPlay className="w-full max-h-[80vh] rounded-xl" onClick={(e) => e.stopPropagation()} />
          ) : (
            <img src={selectedItem.url} alt="Project" className="w-full max-h-[80vh] rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          )}
        </div>
      </div>
    );
  };

  const ProjectCard = ({ children, onClick, tagText, tagColor, title }) => (
    <div 
      className="bg-[#111111]/80 border border-white/5 rounded-[2.5rem] p-4 flex flex-col justify-between items-start transition-all duration-300 hover:border-cyan-500/30 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-4 shadow-lg">
        {children}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className={`absolute top-4 left-4 ${tagColor} text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-lg`}>
          {tagText}
        </div>
      </div>
      
      <div className="w-full px-2">
        {/* FIX: Yahan <h3> ko </h3> se hi close kiya gaya hai */}
        <h3 className="text-white text-xl md:text-2xl font-bold leading-tight group-hover:text-cyan-400 transition-colors mb-4 line-clamp-2 italic">
          {title}
        </h3>
        <div className="text-gray-400 text-sm flex items-center gap-2 group-hover:text-white transition-colors uppercase tracking-widest font-black">
          View Project 
          <span className="text-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-[#050505] min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase">
            My <span className="text-cyan-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            A showcase of my recent work and professional achievements in digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Video Cards */}
          {[
            { tag: "Consulting", color: "bg-blue-600 text-white", title: "The Givers Consultancy - Growth Strategy" },
            { tag: "Law Services", color: "bg-cyan-600 text-white", title: "AL KHALDI - Firm & Legal Consultations" },
            { tag: "Clothing Brand", color: "bg-purple-600 text-white", title: "Laundry Garment Care - E-commerce" },
          ].map((v, i) => (
            <ProjectCard key={i} onClick={() => setSelectedItem({ type: 'video', url: videoUrls[i] })} tagText={v.tag} tagColor={v.color} title={v.title}>
              <video src={videoUrls[i]} muted loop className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </ProjectCard>
          ))}

          {/* Image Cards */}
          {[
            { tag: "Marketing", color: "bg-teal-600 text-white", title: "Social Media Domination Campaign" },
            { tag: "Development", color: "bg-indigo-600 text-white", title: "Premium E-commerce UI/UX Design" },
            { tag: "Analytics", color: "bg-orange-600 text-white", title: "Data-Driven Business Scaling" },
          ].map((img, i) => (
            <ProjectCard key={i} onClick={() => setSelectedItem({ type: 'image', url: imageUrls[i] })} tagText={img.tag} tagColor={img.color} title={img.title}>
              <img src={imageUrls[i]} alt="project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </ProjectCard>
          ))}
        </div>
      </div>
      <Lightbox />
    </section>
  );
};

export default MyProjects;