import '../Pages/Projects/projects.css'

//Project images
import Bugger from '../assets/Bugger.jpg';
import Ebooks from '../assets/Ebooks.jpg';
import GYM from '../assets/GYM.jpg';
import Pizaa from '../assets/Pizza.jpg';
import WebDX from '../assets/WebDx.jpg';


//icon\
import { FaGithub } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";

const projects = [

      {
        id:1,
        img:GYM,
        name:"GYM Website",
        tech:"REACT + CSS ",
        live:"https://gym254.netlify.app/",
        githublink:"https://github.com/Nelson2023-2024/React-GYM"
    },
      {
        id:2,
        img:Bugger,
        name:"Bugger Website",
        tech:"REACT + TAILWIND ",
        live:"https://bugger254.netlify.app/",
        githublink:"https://github.com/Nelson2023-2024/React-GYM"
    },
    {
        id:3,
        img:WebDX,
        name:"WebDX",
        tech:"HTML + CSS + JS",
        live:"https://nelson2023-2024.github.io/webDx.github.io/",
        githublink:"https://github.com/Nelson2023-2024/webDx.github.io"
    },
    {
        id:4,
        img:Pizaa,
        name:"Pizza Website",
        tech:"HTML + CSS + JS",
        live:"https://nelson2023-2024.github.io/Pizza-Website/",
        githublink:"https://github.com/Nelson2023-2024/Pizza-Website"
    },
    {
        id:5,
        img:Ebooks,
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