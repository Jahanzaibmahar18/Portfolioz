// import React from "react";
// import {
//   ArrowRight,
//   Sparkles,
//   Trophy,
//   Users,
// } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 pt-20">

//       {/* Background Decorative Elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>

//       <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div className="space-y-8 text-center lg:text-left">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide">
//             <Sparkles size={16} />
//             2026 Digital Strategy Agency
//           </div>

//           {/* Heading */}
//           <div className="space-y-4">
//             <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white">
//               BUILD YOUR
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
//                 DIGITAL
//               </span>
//               <br />
//               EMPIRE
//             </h1>

//             <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
//               We help ambitious businesses grow with cutting-edge web
//               development, SEO, branding, and high-converting digital
//               experiences.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

//             <button className="group px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-bold text-white flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(37,99,235,0.35)] hover:scale-105">
//               Start Project

//               <ArrowRight
//                 size={20}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </button>

//             <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md text-white font-bold transition-all duration-300 hover:bg-white/10">
//               View Portfolio
//             </button>

//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-5 pt-8">

//             <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:-translate-y-1 transition duration-300">

//               <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
//                 <Trophy size={28} />
//               </div>

//               <h3 className="text-3xl font-black text-white">
//                 150+
//               </h3>

//               <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
//                 Successful Projects
//               </p>

//             </div>

//             <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:-translate-y-1 transition duration-300">

//               <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
//                 <Users size={28} />
//               </div>

//               <h3 className="text-3xl font-black text-white">
//                 98%
//               </h3>

//               <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
//                 Client Satisfaction
//               </p>

//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative group hidden lg:block w-full">

//           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

//           <div className="relative bg-[#151515] border border-white/5 rounded-[3rem] p-6 shadow-2xl overflow-hidden w-full max-w-xl ml-auto">

//             <div className="bg-[#0a0a0a] rounded-[2.5rem] p-12 aspect-square flex flex-col justify-center items-center text-center">

//               <div className="w-40 h-40 bg-blue-600/20 rounded-full flex items-center justify-center mb-8 animate-pulse">

//                 <div className="w-20 h-20 bg-blue-500 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.6)]"></div>

//               </div>

//               <h3 className="text-3xl font-black text-white italic mb-3 uppercase tracking-tighter">
//                 Growth Metrics
//               </h3>

//               <p className="text-gray-500 text-base max-w-[250px]">
//                 Real-time analytics integration for business scaling.
//               </p>

//               <div className="mt-10 space-y-4 w-full px-4">

//                 <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
//                   <div className="h-full w-[85%] bg-blue-600 animate-pulse"></div>
//                 </div>

//                 <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
//                   <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
//                 </div>

//               </div>

//             </div>
//           </div>

//           {/* Floating Card */}
//           <div className="absolute -bottom-8 -left-8 bg-white text-black rounded-3xl p-6 shadow-2xl rotate-[-5deg] hover:rotate-0 transition duration-500">

//             <p className="text-4xl font-black leading-none">
//               +320%
//             </p>

//             <p className="text-sm font-semibold text-gray-600 mt-2 uppercase tracking-wider">
//               Business Growth
//             </p>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;