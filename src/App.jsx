import React from 'react'
import './App.css'
import { Link, Element } from 'react-scroll'
import { useRef } from 'react';
import Contact from './components/Contact';
import ProjectSection from './components/ProjectSection';
import Home from './components/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {


  return (
    <>
      <div className="container bg-[#0C0C0C] text-white ">
        {/* Navbar */}
        <Navbar />


        {/* <div className='h-[83px] bg-black'></div> */}
        <div className='flex flex-col gap-2 pt-[83px]'>
          {/* section */}
          {/* Home*/}
          <Element name="home">
            <Home />
          </Element>
          {/* <div className='h-[0.2px] bg-black'></div> */}

          {/* skills section */}
          <Element name="skills">
            <Skills />
          </Element>


          {/* Project section */}
          <Element name="project" >
            <ProjectSection />
          </Element>

          {/* <div className='h-8 bg-red-600'></div> */}


          {/* Contact section */}
          <Element name="contact">
            <Contact />
          </Element>
        </div>

        <div classNae="h-20 w-60 m-auto flex items-center">
          <Footer />
        </div>

      </div >

    </>
  )
}

export default App
