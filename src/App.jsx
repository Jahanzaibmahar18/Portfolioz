import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Pages/Home";
import AboutSection from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
<<<<<<< HEAD
import Contact from "./Components/Pages/Contect";


=======
import Project from "./Components/Pages/Project";
import Footer from "./Components/Common/Footer";
>>>>>>> 9b03a45f74f074d14b2d999560bd95600ab5db46
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
<<<<<<< HEAD
        <h1 className="text-4xl font-bold">Projects Coming Soon</h1>
      </section> */}

      {/* CONTACT (placeholder if not created yet) */}
      <section id="contact" className="scroll-mt-24">
        <Contact/>
      </section>
=======
<Project/>
      </section>

      {/* CONTACT (placeholder if not created yet) */}
      <section id="contact" className="scroll-mt-24 min-h-screen flex items-center justify-center">
>>>>>>> 9b03a45f74f074d14b2d999560bd95600ab5db46

      </section>
 <section id="contact" className="scroll-mt-24 min-h-screen flex items-center justify-center">
<Footer/>
      </section>
     
    </div>
  );
};

export default App;