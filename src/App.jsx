import React from 'react'
import Home from './Components/Pages/Home'
import Navbar from './Components/Common/Navbar'
import AboutSection from './Components/Pages/About'
import Services from './Components/Pages/Services'
import Footer from './Components/Common/Footer'
import Project from './Components/Pages/Project'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutSection/>
      <Services/>
<Project/>
      <Footer/>
    </div>
  )
}

export default App