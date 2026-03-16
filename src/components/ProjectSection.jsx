import React from 'react'

const ProjectSection = () => {

  // project details
  const ProjectDetails = [
    {
      imageSrc: "image/todo.png",
      title: "iTask todo list",
      toolUsed: "react | tailwind ",
      gitLink: "https://github.com/deepaksah-03/iTask-todoList/",
      demoLink: "https://itask-list.netlify.app/"
    },
    {
      imageSrc: "image/Spreedsheet.png",
      title: "Spreedsheet Table-Strucutre",
      toolUsed: "react | typescript | tailwind ",
      gitLink: "https://github.com/deepaksah-03/spreadsheet-project-frontend/",
      demoLink: "https://spreadsheets-inscripts.netlify.app/"
    },
    {
      imageSrc: "image/myNotes.png",
      title: "My Notebook",
      toolUsed: "react | tailwind |javascript ",
      gitLink: "https://github.com/deepaksah-03/myNotes-app",
      demoLink: "https://my-notes-bo.netlify.app/"
    },
    
  ]
  return (
    <div className="section bg-[#343D68] w-[1245px] h-[495px] m-auto  justify-center mt- 4 border-1 border-[#2c2c2e] rounded-4xl">
      <div className='flex justify-center items-center'>
        <div className='h-[100px] w-[344px] px-[8px] py-[16px] text-center flex flex-col items-center justify-center'>
          <h2 className=''>Project</h2>
          <p>A selected number of projects</p>
        </div>
      </div>


      <div className="project  flex justify-between px-5 m-5">
        {/* mapping all the project details */}
        {ProjectDetails.map((project, idx) => (
          <div className="first flex flex-col items-center justify-center h-[300px] w-[381px] gap-2 border-2 border-white rounded-lg p-2  " key={idx}>
            <img className='w-[300px] h-[176px]' src={project.imageSrc} alt="" />
            <h1 className=''>{project.title}</h1>
            <p>{project.toolUsed}</p>
            <div className="button flex gap-5">
              <button className='border-1 border-white rounded-lg p-2 py-1 hover:cursor-pointer hover:bg-[#242d59]'>
                <a href={project.gitLink} target='blank'>GitHub Link</a>
              </button>
              <button className='border-1 border-white rounded-lg p-2 py-1 hover:cursor-pointer hover:bg-[#242d59]'>
                <a href={project.demoLink} target='blank'>Demo Link</a>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ProjectSection
