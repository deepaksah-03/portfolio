import React from 'react'

const Footer = () => {

  //  social meadia link in object form
  const socilaLink = [
    { name: "linkdin", webLink: "https://www.linkedin.com/in/deepaksah-d03/", image: "image/linkdin.svg" },
    { name: "github", webLink: "https://github.com/deepaksah-03", image: "image/github.svg" },
    { name: "x", webLink: "https://x.com/deepaksah_03", image: "image/x.svg" }

  ]

  return (
    <div className='w-[1245px] h-40 bg m-auto flex items-center justify-end gap-5'>
      {/* copyright seaction */}
      <div className="CopyRight"><p>&copy; {new Date().getFullYear()} Deepak | All right reserved.</p>
      </div>

      {/* logo section */}
      {/* <div className="footerLogo"><img className='h-30 bg-' src="image/logo2.png" alt="" />
      </div> */}

      {/* social media link seaction */}
      <div className="footerSocialLink flex gap-2">

        {socilaLink.map((data, index) => {

          return (

            <div key={index} className="context w-8 h-8 rounded-full bg-white">
              <a href={data.webLink} target='blank' >
                <img className='p-1' src={data.image} alt={data.name} width={50} />
              </a>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Footer
