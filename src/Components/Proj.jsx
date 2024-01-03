import '../Pages/Projects/projects.css'


//icon\
import { FaGithub } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";

const projects = [

      {
        id:1,
        img:"https://drive.google.com/uc?id=1cEzgmM4XnVa2Aejaaf-xhEf2VXEz9-rl",
        name:"GYM Website",
        tech:"REACT + CSS ",
        live:"https://gym245.netlify.app",
        githublink:"https://github.com/Nelson2023-2024/React-GYM"
    },
      {
        id:2,
        img:"https://drive.google.com/uc?id=1sFASzGhXDB_rsfzZyqavywHkDUPpmGZ7",
        name:"Bugger Website",
        tech:"REACT + TAILWIND ",
        live:"https://bugger254.netlify.app/",
        githublink:"https://github.com/Nelson2023-2024/React-GYM"
    },
    {
        id:3,
        img:"https://drive.google.com/uc?id=1WdwzTvPBoOW5JxKYW3SCMuvKrZyf7xmC",
        name:"WebDX",
        tech:"HTML + CSS + JS",
        live:"https://nelson2023-2024.github.io/webDx.github.io/",
        githublink:"https://github.com/Nelson2023-2024/webDx.github.io"
    },
    {
        id:4,
        img:"https://drive.google.com/uc?id=1J4XeGGuwAb15jxvRuiMpUutMIPlbHDd_",
        name:"Pizza Website",
        tech:"HTML + CSS + JS",
        live:"https://nelson2023-2024.github.io/Pizza-Website/",
        githublink:"https://github.com/Nelson2023-2024/Pizza-Website"
    },
    {
        id:5,
        img:"https://drive.google.com/uc?id=1usoTPqSFcjKwpqjMZ95cEO_61aXu1ZTh",
        name:"Ebook Website",
        tech:"HTML + CSS + JS",
        live:"https://nelson2023-2024.github.io/Swipper-js-Project/",
        githublink:"https://github.com/Nelson2023-2024/Swipper-js-Project"
    },
  
  
]

function Proj() {
  return (
    <>
    <section className="project__section">
        <h1 data-aos="fade-up">Projects</h1>
        <div className="container">
            {
                projects.map(({id, img, name, tech, live, githublink}) => (
                    <div className='projects__card' key={id} >
                         <h2>{name}</h2>
                        <img loading='lazy' src={img} alt="" />
                        <h4>{tech}</h4>
                        <div className="projects__buttons">
                            <a href={live} target="_blank" rel="noopener noreferrer">Live Demo
                            <IoMdCloudUpload className='go'/>

                            </a>
                            <a href={githublink} target="_blank" rel="noopener noreferrer">
                               Code <FaGithub className='github' />

                            </a>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Proj