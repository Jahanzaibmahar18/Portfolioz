import React from 'react';
// React Icons import
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';

const Footer = () => {
  return (
    // w-full aur max-w-none se footer poori screen ki width lega
    <footer className="w-full bg-[#0a0a0a] text-white pt-24 pb-8 px-4 md:px-10 lg:px-16 font-sans border-t border-gray-900">
      
      {/* Container ko max-w-[1920px] diya hai taake bari screens par content zyada na phailay magar bg full rahay */}
      <div className="w-full max-w-[1920px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-gray-800">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-black italic tracking-tighter mb-6 uppercase">
              ZAHID <span className="text-blue-600 font-bold">HUSSAIN.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm font-medium">
              I help ambitious brands dominate the digital landscape through data-backed strategies and creative excellence.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noreferrer" className="group w-14 h-14 border border-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 shadow-lg shadow-blue-900/5">
                <FaFacebookF size={20} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
              </a>

              <a href="#" target="_blank" rel="noreferrer" className="group w-14 h-14 border border-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-all duration-500 shadow-lg shadow-blue-900/5">
                <FaLinkedinIn size={20} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
              </a>

              <a href="#" target="_blank" rel="noreferrer" className="group w-14 h-14 border border-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-500 shadow-lg shadow-pink-900/5">
                <FaInstagram size={20} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
              </a>

              <a href="#" target="_blank" rel="noreferrer" className="group w-14 h-14 border border-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500 shadow-lg">
                <FaGithub size={20} className="text-gray-400 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-500" />
              </a>
            </div>
          </div>

          {/* Marketing Services */}
          <div className="lg:pl-10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 border-l-4 border-blue-600 pl-4 flex items-center gap-2">
              <SiGoogleanalytics className="text-blue-600" /> My Services
            </h4>
            <ul className="space-y-4 text-gray-400 font-bold text-sm uppercase tracking-tight">
              {['SEO Optimization', 'Paid Advertising (PPC)', 'Social Media Strategy', 'Content Marketing', 'Conversion Rate (CRO)'].map((service) => (
                <li key={service} className="hover:text-blue-500 cursor-pointer transition-all flex items-center gap-3 group">
                  <span className="w-0 group-hover:w-4 h-[2px] bg-blue-500 transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 border-l-4 border-yellow-400 pl-4">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400 font-bold text-sm uppercase tracking-tight">
              {['Success Stories', 'About Me', 'Portfolio', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition-all flex items-center gap-2 group">
                  <HiOutlineArrowNarrowRight className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-400" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion Box */}
          <div className="bg-blue-600 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-4 leading-tight text-white uppercase italic tracking-tighter">
                Ready to Scale <br />Your Business?
              </h4>
              <p className="text-blue-100 text-sm mb-8 font-bold uppercase tracking-widest opacity-80">Let's build your brand.</p>
              <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all duration-300 uppercase tracking-tighter text-sm flex items-center justify-center gap-3 group/btn">
                Get Free Audit 
                <HiOutlineArrowNarrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest italic">
              Available for new projects in Q2 2026
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase font-black">
              © 2026 ZAHID HUSSAIN • ALL RIGHTS RESERVED
            </p>
            <div className="h-5 w-px bg-gray-800 hidden md:block"></div>
            <p className="text-gray-500 text-[10px] font-black hover:text-white cursor-pointer transition-all uppercase tracking-[0.2em] italic">
              Digital Marketing Expert
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;