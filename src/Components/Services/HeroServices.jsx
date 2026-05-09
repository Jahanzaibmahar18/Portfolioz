import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const HeroServices = () => {
  const baseServices = [
    { title: "Social Strategy", icon: "📊", bg: "bg-blue-600", desc: "Advanced brand positioning through data-driven social insights." },
    { title: "Search Dominance", icon: "🔍", bg: "bg-yellow-400", desc: "Comprehensive SEO strategies to dominate the first page of Google." },
    { title: "Paid Acquisition", icon: "🎯", bg: "bg-black", desc: "High-conversion PPC campaigns optimized for maximum ROI." },
    { title: "Creative Content", icon: "🎨", bg: "bg-blue-400", desc: "Engaging visual storytelling that captures and retains attention." },
    { title: "Growth Analytics", icon: "📈", bg: "bg-gray-800", desc: "Real-time tracking and optimization for scalable business growth." },
    { title: "Email Systems", icon: "✉️", bg: "bg-blue-700", desc: "Automated lifecycle marketing to boost customer lifetime value." }
  ];

  // Gap khatam karne ke liye hum array ko double kar rahe hain (Infinite Loop Hack)
  const services = [...baseServices, ...baseServices];

  return (
    <section className="py-24 bg-white select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="h-0.5 w-12 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm font-sans">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black leading-tight tracking-tighter font-sans">
            Next-Gen <span className="text-blue-600 italic">Marketing</span> Solutions.
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true} // Infinite Loop On
          slidesPerView={'auto'} 
          initialSlide={3} // Start from middle to hide start/end points
          speed={1000} // Smooth sliding speed
          loopedSlides={services.length} // Force Swiper to pre-render all slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="services-swiper pb-20!"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index} className="max-w-85 sm:max-w-95 px-4">
              <div className="group relative bg-gray-50 p-10 rounded-[3rem] border border-gray-100 h-115 flex flex-col transition-all duration-500 hover:bg-white hover:shadow-2xl overflow-hidden">
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center text-3xl shadow-lg mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="grow">
                  <h4 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <span className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-black group-hover:text-blue-600 cursor-pointer">
                    View Strategy
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                {/* Animated Accent */}
                <div className={`absolute bottom-0 left-0 h-1.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${item.bg}`}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.3;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 25px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default HeroServices;