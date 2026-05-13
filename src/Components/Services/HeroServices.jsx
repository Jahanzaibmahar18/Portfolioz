import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import {
  FaChartLine,
  FaSearch,
  FaBullseye,
  FaPaintBrush,
  FaLinkedin,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const HeroServices = () => {
  const services = [
    {
      title: "Marketing Strategy",
      icon: <FaChartLine />,
      desc: "Advanced brand positioning through data-driven social insights.",
    },
    {
      title: "Local SEO",
      icon: <FaSearch />,
      desc: "SEO strategies to rank your business on top of Google.",
    },
    {
      title: "Meta Ads",
      icon: <FaBullseye />,
      desc: "High-conversion campaigns focused on maximizing ROI and driving business growth.",
    },
    {
      title: "AI Content",
      icon: <FaPaintBrush />,
      desc: "AI-powered visual storytelling that strengthens brand identity and creates a lasting impact across audiences.",
    },
    {
      title: "LinkedIn Growth",
      icon: <FaLinkedin />,
      desc: "Data-driven optimization for scalable LinkedIn growth and business expansion.",
    },
    {
      title: "Email Systems",
      icon: <FaEnvelopeOpenText />,
      desc: "Automated marketing funnels to increase customer value.",
    },
  ];

  const items = [...services, ...services];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div data-aos="zoom-in" className="mb-14 text-center">
          <p className="text-blue-500 uppercase tracking-[0.3em] text-sm font-bold">
            My Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Next-Gen{" "}
            <span className="text-yellow-400">Marketing</span>{" "}
            Solutions
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I design modern digital strategies that help businesses scale faster,
            smarter, and more efficiently.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView="auto"
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.2,
            slideShadows: false,
          }}
          className="pb-20"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="max-w-sm px-3">
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-90 flex flex-col justify-between hover:bg-white/10 transition-all duration-500">

                {/* ICON */}
                <div className="text-4xl w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-600/20 group-hover:bg-yellow-400/20 transition text-white group-hover:text-yellow-400">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SWIPER STYLE */}
      <style>{`
        .swiper-slide {
          opacity: 0.4;
          transform: scale(0.9);
          transition: all 0.4s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-pagination-bullet-active {
          background: #facc15 !important;
          width: 24px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default HeroServices;