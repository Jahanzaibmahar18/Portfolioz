import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923167160569"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className="
          w-16 h-16
          rounded-full
          bg-green-500
          flex items-center justify-center
          shadow-2xl
          hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
          hover:scale-110
          transition-all duration-300
          animate-[float_3s_ease-in-out_infinite]
        "
      >
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;