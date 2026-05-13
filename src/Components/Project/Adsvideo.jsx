import React, { useState, useEffect, useRef } from "react";

// === ASSETS ===
import ads1 from "../../assets/ads1.mp4";
import ads2 from "../../assets/ads2.mp4";

const Adsvideo = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedItem && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedItem]);

  const adsData = [
    {
      id: 1,
      url: ads1,
      category: "Video Marketing",
      title: "Professional Ad Campaign",
      tagline: "High-Impact Video Promotion",
      description:
        "Creative video advertisement focused on engagement, branding, and audience attention.",
      metrics: ["1080p Quality", "Engaging Content", "High Conversion"],
      btnLabel: "View Campaign",
    },

    {
      id: 2,
      url: ads2,
      category: "Digital Advertising",
      title: "Dynamic Video Showcase",
      tagline: "Modern Marketing Solution",
      description:
        "Professional marketing video designed to improve reach and boost audience interaction.",
      metrics: ["4K Ready", "Creative Strategy", "ROI Focused"],
      btnLabel: "Explore Strategy",
    },
  ];

  // ================= MODAL =================
  const Modal = () => {
    if (!selectedItem) return null;

    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-lg"
          onClick={() => setSelectedItem(null)}
        ></div>

        {/* Modal Box */}
        <div className="relative w-full max-w-5xl bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/10">

          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-cyan-500/30 transition"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2">

            {/* Video */}
            <div className="bg-black">
              <video
                ref={videoRef}
                src={selectedItem.url}
                controls
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center bg-[#111]">

              <span className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-bold mb-3">
                {selectedItem.category}
              </span>

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedItem.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.metrics.map((item, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">
                {selectedItem.btnLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`bg-[#0a0a0a] py-20 px-6 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
            Video Ads{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Professional video campaigns designed to grow your brand
            and increase audience engagement.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {adsData.map((item, index) => (
            <div
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              onClick={() => setSelectedItem(item)}
              className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden cursor-pointer group hover:border-cyan-500/30 transition-all duration-500"
            >

              {/* Video */}
              <div className="relative aspect-video overflow-hidden">

                <video
                  src={item.url}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                    <span className="text-cyan-400 text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold">
                  {item.category}
                </span>

                <h3 className="text-white text-2xl font-bold mt-3 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.tagline}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase px-3 py-1 rounded-full border border-white/10 text-gray-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-6 text-cyan-400 font-semibold hover:text-white transition">
                  {item.btnLabel} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal />
    </section>
  );
};

export default Adsvideo;