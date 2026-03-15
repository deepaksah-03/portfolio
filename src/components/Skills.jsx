import React from 'react'

const Skills = () => {
  return (
    <div className="section w-[1245px] h-[495px] m-auto flex flex-col items-center border-1 border-[#2c2c2e] rounded-4xl">
        <h2 className='h-10 font-bevietnam font-medium text-[20px] leading-[100%] text-[#E84949] mt-3'>Skills</h2>
          <div className='flex justify-between w-full m-2 ml-5'>
            {/* left part */}
            <div className='left  w-[518px] h-[200] p-2 '>
              <h6>I have experience in the following technologies :</h6>
              <div className='webTech'>
                <p>Web Technology</p>
                <div className='image flex gap-10' >
                  <img className='w-[80px] h-[80px]' src="image/html.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/css.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/javascript.png" alt="" />
                </div>
              </div>
              <div className="framework">
                <p>Framework</p>
                <div className='image flex gap-10'>
                  <img className='w-[80px] h-[80px]' src="image/react.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/nodeJs.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/expressJs.png" alt="" />
                </div>
              </div>
              <div className="proLang">
                <p>Programming Language</p>
                <div className='image flex gap-10'>
                  <img className='w-[80px] h-[80px]' src="image/java.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/c++.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/python.png" alt="" />
                </div>
              </div>
              <div className="database">
                <p>Database</p>
                <div className='image flex gap-10'>
                  <img className='w-[80px] h-[80px]' src="image/mongodb.png" alt="" />
                  <img className='w-[80px] h-[80px]' src="image/sql.png" alt="" />
                </div>
              </div>
            </div>
            {/* right part */}
            <div className="right  h-full flex justify-end items-center m-2 mr-5">
              <img className='w-[500px] h-[380px]' src="image/skillRight.png" alt="" />
            </div>
          </div>
      
    </div>
  )
}

export default Skills
