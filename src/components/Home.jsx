import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
  const roles = ["Web Developer", "Software Developer", "Problem Solver", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((preIndex) => (preIndex + 1) % roles.length)

    }, 2000)

    return () => clearInterval(timer)
  }, [])



  return (
    <div className="home flex w-[1245px] h-[495px] mx-auto items-center rounded-4xl border-1 border-[#2c2c2e]">
      {/* left part  */}
      <div className="text max-w-[553px] max-h-[280px] w-1/2 justify-start mx-5 -tracking-tighter" >
        <h2 className='text-5xl font-bold tracking-tight leading-snug' >Hi, I'm Deepak</h2>
        <h1 className='text-5xl font-semibold tracking-tight leading-snug'>{roles[index]}</h1>
        <h4 className=' font-semibold text-[18px] leading-[100%] tracking-[0px] '>I'm <span className='font-bold '>Deepak</span>, a developer dedeicated to  making the world a</h4>
        <h4 className='font-semibold text-[18px] leading-[100%] tracking-[0px]' >better place one line of code at a time.</h4>
        <div className='h-2'></div>

        <a href="#contact"
          className='w-[98px] h-[42px] px-[16px] py-[8px] bg-[#E84949] item-center justify-center rounded-xl smooth={true} offset={-83} duration={500} '>
          Let's Discuss</a>
      </div>

      {/* right part  */}
      <div className="img w-1/2 h-[495px] flex justify-end ">
        <div className="image w-[343.85px] h-[389.11px] mt-[53.37px] -[877.45px] justify-center items-center">
          <img className='w-[343px]  rounded-xl' src="image/deepakDp.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
