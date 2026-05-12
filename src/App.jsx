import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Pages/Home";
import AboutSection from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contect";
import Project from "./Components/Pages/Project";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <Navbar />

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

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <Project />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default App;