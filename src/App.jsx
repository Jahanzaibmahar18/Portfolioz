import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Pages/Home";
import AboutSection from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contect";


const App = () => {
  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGES / SECTIONS */}

      {/* HOME */}
      <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      {/* PROJECTS (placeholder if not created yet)
      <section id="projects" className="scroll-mt-24 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects Coming Soon</h1>
      </section> */}

      {/* CONTACT (placeholder if not created yet) */}
      <section id="contact" className="scroll-mt-24">
        <Contact/>
      </section>

    </div>
  );
};

export default App;