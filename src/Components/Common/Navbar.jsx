import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Name/Logo */}
          <div className="shrink">
            <h1 className="text-2xl font-black tracking-tighter text-black">
              ZAHID <span className="text-blue-600 uppercase">Hussain</span>
            </h1>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex grow justify-center">
            <div className="flex space-x-10">
              <a href="#home" className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors uppercase tracking-widest">Home</a>
              <a href="#about" className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors uppercase tracking-widest">About</a>
              <a href="#services" className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors uppercase tracking-widest">Services</a>
              <a href="#projects" className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors uppercase tracking-widest">Projects</a>
            </div>
          </div>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md">
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Links) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-6 shadow-xl">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <a href="#home" className="block px-3 py-2 text-base font-bold text-gray-800 hover:bg-yellow-400 rounded-md transition">Home</a>
            <a href="#about" className="block px-3 py-2 text-base font-bold text-gray-800 hover:bg-yellow-400 rounded-md transition">About</a>
            <a href="#services" className="block px-3 py-2 text-base font-bold text-gray-800 hover:bg-yellow-400 rounded-md transition">Services</a>
            <a href="#projects" className="block px-3 py-2 text-base font-bold text-gray-800 hover:bg-yellow-400 rounded-md transition">Projects</a>
            <button className="w-full mt-4 bg-blue-600 text-white px-3 py-3 rounded-md font-bold hover:bg-black transition">
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;