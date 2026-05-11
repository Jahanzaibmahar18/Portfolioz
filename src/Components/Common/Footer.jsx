import React from 'react';
// React Icons import kar rahe hain
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-gray-800">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-black italic tracking-tighter mb-6 uppercase">
              ZAHID <span className="text-blue-600 font-bold">HUSSAIN.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              I help ambitious brands dominate the digital landscape through data-backed strategies and creative excellence.
            </p>
            
            {/* Social Icons using React Icons */}
           <div className="flex gap-4">
  {/* Facebook */}
  <a href="#" target="_blank" rel="noreferrer" className="group w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-500">
    <FaFacebookF size={18} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
  </a>

  {/* LinkedIn */}
  <a href="#" target="_blank" rel="noreferrer" className="group w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-all duration-500">
    <FaLinkedinIn size={18} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
  </a>

  {/* Instagram */}
  <a href="#" target="_blank" rel="noreferrer" className="group w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-500">
    <FaInstagram size={18} className="text-gray-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500" />
  </a>

  {/* Github */}
  <a href="#" target="_blank" rel="noreferrer" className="group w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500">
    <FaGithub size={18} className="text-gray-400 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-500" />
  </a>
</div>
          </div>

          {/* Marketing Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-blue-600 pl-4 flex items-center gap-2">
              <SiGoogleanalytics className="text-blue-600" /> My Services
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm md:text-base">
              {['SEO Optimization', 'Paid Advertising (PPC)', 'Social Media Strategy', 'Content Marketing', 'Conversion Rate (CRO)'].map((service) => (
                <li key={service} className="hover:text-blue-500 cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-blue-500 transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-yellow-400 pl-4">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm md:text-base">
              {['Success Stories', 'About Me', 'Portfolio', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <HiOutlineArrowNarrowRight className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-400" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion Box */}
          <div className="bg-blue-600 p-8 rounded-3xl relative overflow-hidden group shadow-2xl shadow-blue-900/20">
            <div className="relative z-10">
              <h4 className="text-xl font-black mb-4 leading-tight text-white uppercase italic">
                Ready to Scale <br />Your Business?
              </h4>
              <p className="text-blue-100 text-sm mb-6 font-medium">Let's build your brand together.</p>
              <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 uppercase tracking-tighter text-sm flex items-center justify-center gap-3 group">
                Get Free Audit 
                <HiOutlineArrowNarrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            <p className="text-gray-500 text-sm font-medium italic">
              Available for new projects in Q2 2026.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-black font-mono">
              © 2026 ZAHID HUSSAIN • ALL RIGHTS RESERVED
            </p>
            <div className="h-4 w-px bg-gray-800 hidden md:block"></div>
            <p className="text-gray-600 text-[10px] font-black hover:text-white cursor-pointer transition-all uppercase tracking-widest">
              Digital Marketing Expert
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;