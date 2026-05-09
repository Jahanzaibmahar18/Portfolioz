import React from 'react'
import Home from './Components/Pages/Home'
import Navbar from './Components/Common/Navbar'
import AboutSection from './Components/Pages/About'
import Services from './Components/Pages/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutSection/>
      <Services/>
    </div>
  )
}

export default App