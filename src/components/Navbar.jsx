import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const cssClass = {
    logo: ' w-[50px] items-center justify-center rounded-4xl',
    button: "px-4 py-2 text-white rounded-lg shadow transition duration-300 cursor-pointer hover:bg-[#2A3439]",
    allCenter:'flex item-center content-center'

  }

  return (
    <div>
      <div className="navbar  w-full h-[60px] fixed bg-[#0A0A0A] text-white ">
        <nav className='flex items-center justify-between  px-40 h-[50px]'>

          <div className="logo ">
            <Link to="home" smooth={true} offset={-83} duration={500} className="nav-link hover:text-red-300 btn">
              <img className={cssClass.logo} src="image/logo.png" alt="logo" />
            </Link>
          </div>
          <div className='flex '>
            <Link to="home" smooth={true} offset={-83} duration={500} className={cssClass.button}>Home</Link>
            <Link to="skills" smooth={true} offset={-83} duration={500} className={cssClass.button}>Skills</Link>
            <Link to="project" smooth={true} offset={-83} duration={500} className={cssClass.button}>Project</Link>
            <Link to="contact" smooth={true} offset={-83} duration={500} className={cssClass.button}>Contact me</Link>
            <ul>  <a
              href="/resume.pdf"     // path inside public folder
              download="Deepak Resume.pdf"  // suggested filename for user
              className={`${cssClass.button} ${cssClass.allCenter}`}
            >
              Download Resume
            </a></ul>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar
