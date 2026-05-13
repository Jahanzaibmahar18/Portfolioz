import React, { useState, useEffect } from 'react';

// === ASSETS ===
import LinkedInBefore from '../../assets/mar4.png';
import LinkedInAfter from '../../assets/mar5.png';

const LinkedInCase = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Initial load animation trigger
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const linkedinData = [
        {
            id: 1,
            url: LinkedInAfter,
            category: "Organic Growth",
            accent: "#0077B5",
            title: "Audience Scaling",
            tagline: "1.3K → 5.8K Followers Transformation",
            description:
                "Strategically scaled a professional profile by identifying high-intent audience segments and optimizing content for LinkedIn's algorithm.",
            metrics: [
                "450% Growth",
                "High Visibility",
                "Organic Lead Gen"
            ],
            btnLabel: "Growth Breakdown"
        },

        {
            id: 2,
            url: LinkedInBefore,
            category: "Authority Building",
            accent: "#6366f1",
            title: "Executive Branding",
            tagline: "Strategic Profile Positioning",
            description:
                "Restructured digital identity through professional storytelling and visual alignment to establish industry leadership and trust.",
            metrics: [
                "Enhanced Authority",
                "Visual Consistency",
                "Credibility Score"
            ],
            btnLabel: "Optimization Details"
        }
    ];

    // ================= MODAL =================
    const Modal = () => {

        if (!selectedItem) return null;

        return (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-8">

                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500"
                    onClick={() => setSelectedItem(null)}
                />

                <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transform transition-all">

                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-white transition-all text-white/50"
                        onClick={() => setSelectedItem(null)}
                    >
                        <span className="text-xl font-light">✕</span>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* Image */}
                        <div className="md:col-span-8 bg-[#000]">
                            <img
                                src={selectedItem.url}
                                alt={selectedItem.title}
                                className="w-full h-full object-contain max-h-[70vh]"
                            />
                        </div>

                        {/* Content */}
                        <div className="md:col-span-4 p-8 flex flex-col justify-center bg-[#0d0d0d]">

                            <span className="text-cyan-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                                {selectedItem.category}
                            </span>

                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">
                                {selectedItem.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {selectedItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section
            className={`bg-[#0a0a0a] py-2 px-2 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div
                    data-aos="fade-up"
                    className="relative mb-10"
                >

                    <h2 className="relative text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">

                        LINKEDIN{" "}

                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                            STRATEGY
                        </span>

                    </h2>

                    <p className="text-gray-500 mt-6 max-w-xl text-lg font-light leading-relaxed">

                        Moving beyond metrics to build professional authority
                        and sustainable organic reach.

                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {linkedinData.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos={index === 0 ? "fade-right" : "fade-left"}
                            className="group cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >

                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111] mb-8 border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500">

                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-6 left-6 flex items-center gap-2">

                                    <div
                                        className="w-2 h-2 rounded-full animate-pulse"
                                        style={{ backgroundColor: item.accent }}
                                    />

                                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 px-2">

                                <div className="max-w-md">

                                    <h3 className="text-white text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm font-medium mb-4 italic">
                                        {item.tagline}
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        {item.metrics.map((m, idx) => (

                                            <span
                                                key={idx}
                                                className="text-[9px] text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:border-cyan-500/20 group-hover:text-white transition-all"
                                            >
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="self-start md:self-center flex items-center group/btn">

                                    <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover/btn:text-cyan-400 transition-colors">
                                        {item.btnLabel}
                                    </span>

                                    <div className="ml-3 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-cyan-500 transition-all">

                                        <span className="text-white group-hover/btn:translate-x-1 transition-transform">
                                            →
                                        </span>

                                    </div>
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

export default LinkedInCase;