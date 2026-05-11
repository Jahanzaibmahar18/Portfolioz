import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <h1 className="text-3xl font-extrabold text-white">
            Zahid <span className="text-blue-500">Hussain</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="relative text-gray-300 font-medium hover:text-white transition group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition">
              Hire Me
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="bg-black px-6 space-y-5 border-t border-white/10">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;