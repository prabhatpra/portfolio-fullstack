import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Project/Projects'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Experience from './Component/Experience/Experience'


const App = () => {
  
  return (
    <div>
      <h1 className='text-red-400, font-bold'>Hello worlld</h1>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    
    </div>
  );

};
export default App
